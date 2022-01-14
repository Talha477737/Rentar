const mongoose = require("mongoose");
const morgan = require("morgan");
const express = require("express");
const app = express();
const cars = require("./routes/Cars");
const home = require("./routes/home");
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://talha:talha@cluster0.ye6xc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB: ", err));

app.use(cors());
app.use(express.json());
app.use("/api/cars", cars);
app.use("/", home);
app.use(morgan("tiny"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on ${port}`));
