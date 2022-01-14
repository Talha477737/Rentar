const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");
const router = express.Router();
const multer = require("multer");

const Car = mongoose.model(
  "Car",
  new mongoose.Schema({
    title: { type: String, required: true, minlength: 3 },
    rent: { type: Number, required: true, min: 3000 },
    location: { type: String, required: true },
    isAvailable: { type: Boolean, default: true },
    date: { type: Date, default: Date.now },
    images: [{ image: String, contentType: String }],
    // brand: { type: String, required: true },
    // category: {
    //   type: String,
    //   enum: ["luxury", "standard", "truck"],
    //   required: true,
    // },
  })
);

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("test");

router.get("/", async (req, res) => {
  const cars = await Car.find().sort("title");
  res.send(cars);
});

router.post("/", async (req, res) => {
  const { title, rent, location, availability, images } = req.body;

  const { error } = ValidateCar(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let newCar = new Car({
    title: title,
    rent: rent,
    location: location,
    isAvailable: availability,
    images: images,
  });

  try {
    newCar = await newCar.save();
    console.log(newCar);
    res.send(newCar);
  } catch (exception) {
    for (fields in exception.errors)
      console.log(exception.errors[fields].message);
  }
});

router.get("/:id", async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) return res.status(404).send(`Car does'nt exist`);

  res.send(car);
});

router.put("/:id", async (req, res) => {
  const { title, rent, location, availability, images } = req.body;

  const { error } = ValidateCarOnPut(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const update = await Car.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: title,
        rent: rent,
        location: location,
        isAvailable: availability,
        images: images,
      },
    },
    { new: true }
  );

  if (!update) return res.status(404).send(`Car does'nt exist`);

  res.send(update);
});

router.delete("/:id", async (req, res) => {
  const del = await Car.findByIdAndRemove(req.params.id);

  if (!del) return res.status(404).send(`Car does'nt exist`);

  res.send(del);
});

function ValidateCar(car) {
  const schema = Joi.object({
    title: Joi.string().required().min(3),
    rent: Joi.number().required().min(3000),
    location: Joi.string().required(),
    availability: Joi.string(),
    images: Joi.array(),
  });

  return schema.validate(car);
}

function ValidateCarOnPut(car) {
  const schema = Joi.object({
    title: Joi.string().min(3),
    rent: Joi.number().min(3000),
    location: Joi.string(),
    availability: Joi.string(),
    images: Joi.array(),
  });

  return schema.validate(car);
}

module.exports = router;
