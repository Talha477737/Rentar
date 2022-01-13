const mongoose = require("mongoose");
const morgan = require("morgan");
const express = require("express");
const app = express();
const cars = require("./routes/Cars");
const home = require("./routes/home");

mongoose
  .connect("mongodb://localhost/Rentar")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB: ", err));

app.use(express.json());
app.use("/api/cars", cars);
app.use("/", home);
app.use(morgan("tiny"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on ${port}`));
