import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/AdminAddCarForm.css";
import Joi from "joi-browser";
import { useParams } from "react-router-dom";
const AdminUpdateCar = (props) => {
  const [Errors, setErrors] = useState([]);
  const [Car, setCar] = useState([]);
  const [CarName, setCarName] = useState("");
  const [CarRent, setCarRent] = useState("");
  const [CarLocation, setCarLocation] = useState("");
  const { id } = useParams();

  useEffect(async () => {
    await axios
      .get(`http://localhost:3000/api/cars/${id}`)
      .then(function (response) {
        setCar(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {};
  }, []);
  console.log(Car);

  console.log("Name: ", CarName);
  console.log("Location: ", CarLocation);
  console.log("Rent: ", CarRent);

  const preLoadValues = () => {
    setCarName(Car.title);
    setCarLocation(Car.location);
    setCarRent(Car.rent);
  };

  const schema = {
    CarName: Joi.string().required().label("Car Name"),
    CarRent: Joi.string().required().label("Car Rent"),
    CarLocation: Joi.string().required().label("Car Location"),
  };

  const validate = () => {
    const Data = { CarName, CarRent, CarLocation };
    const result = Joi.validate(Data, schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};

    result.error.details.map((result) => {
      errors[result.path] = result.message;
    });

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const Schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, Schema);
    return error ? error.details[0].message : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    setErrors(errors || {});
    if (errors) return;

    axios
      .put(`http://localhost:3000/api/cars/${id}`, {
        title: CarName,
        location: CarLocation,
        rent: CarRent,
      })
      .then((response) => console.log(response.data));

    setCarName("");
    setCarLocation(1);
    setCarRent("");
  };

  const handleChange = ({ currentTarget: input }) => {
    const errors = { Errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    if (input.name === "CarName") setCarName(input.value);
    else if (input.name === "CarRent") setCarRent(input.value);
    else setCarLocation(input.value);

    setErrors(errors);
  };
  return (
    <div className="mt-3">
      <form className="row g-3 shadow" id="form" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="Name"
              value={CarName}
              placeholder="CarName"
              name="CarName"
              onChange={handleChange}
            />
            <label htmlfor="Name">Car Name</label>
            {Errors.CarName && (
              <div className="alert alert-danger"> {Errors.CarName} </div>
            )}
          </div>
        </div>

        {/* <div className="col-md-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Car Registration ID</label>
          </div>
        </div> */}
        <div className="col-md-12">
          <div className="form-floating">
            <select
              className="form-select"
              value={CarLocation}
              id="Location"
              aria-label="Floating label select example"
              style={{ color: "#0055ff" }}
              name="CarLocation"
              onChange={handleChange}
            >
              <option selected>GT Road, Warehouse, Lahore</option>
              <option value="1">Gulberg, Warehouse, Lahore</option>
              <option value="2">Model Town Warehouse, Lahore</option>
              <option value="3">Thokar Warehouse, Lahore</option>
            </select>
            <label htmlfor="Location">Preferred DropOff Location</label>
            {Errors.CarLocation && (
              <div className="alert alert-danger"> {Errors.CarLocation} </div>
            )}
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={CarRent}
              className="form-control"
              id="Rent"
              placeholder="asd"
              name="CarRent"
              onChange={handleChange}
              inputmode="numeric"
            />
            <label htmlfor="Rent">Rent</label>
            {Errors.CarRent && (
              <div className="alert alert-danger"> {Errors.CarRent} </div>
            )}
          </div>
        </div>
        <div className="col-12 mb-5">
          <button
            type="submit"
            className="btn btn btn-outline-primary"
            id="choice"
          >
            Apply for Rent
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminUpdateCar;
