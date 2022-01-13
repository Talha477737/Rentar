import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router";
import "../CSS/Signup.css";
import track from "../Assets/car-form.gif";
import Joi from "joi-browser";
const Signup = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Home, setHome] = useState("");
  const [Pass, setPass] = useState("");
  const [Cell, setCell] = useState("");
  const navigate = useNavigate();
  const [Errors, setErrors] = useState([]);

  const schema = {
    Email: Joi.string().required().label("Email"),
    Pass: Joi.string().required().label("Password"),
    Fname: Joi.string().required().label("First Name"),
    Lname: Joi.string().required().label("Last Name"),
    Cell: Joi.string().required().label("Phone Number"),
    Home: Joi.string().required().label("Address"),
  };

  const validate = () => {
    const Data = { Email, Pass, Fname, Lname, Cell, Home };
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
    navigate("/Admin");
  };

  const handleChange = ({ currentTarget: input }) => {
    const errors = { Errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    if (input.name === "Email") setEmail(input.value);
    else if (input.name === "Pass") setPass(input.value);
    else if (input.name === "Fname") setFname(input.value);
    else if (input.name === "Lname") setLname(input.value);
    else if (input.name === "Home") setHome(input.value);
    else setCell(input.value);

    setErrors(errors);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="row">
        <div className="col-6">
          <div className="container mt-5 ms-3 shadow" id="cont">
            <form className="row g-3" id="form" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    onChange={handleChange}
                    value={Fname}
                    type="text"
                    className="form-control"
                    id="FirstName"
                    placeholder="name@example.com"
                    name="Fname"
                  />
                  <label htmlFor="FirstName">First Name</label>
                  {Errors.Fname && (
                    <div className="alert alert-danger"> {Errors.Fname} </div>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    onChange={handleChange}
                    value={Lname}
                    type="text"
                    className="form-control"
                    id="LastName"
                    placeholder="name@example.com"
                    name="Lname"
                  />
                  <label htmlFor="LastName">Last Name</label>
                  {Errors.Lname && (
                    <div className="alert alert-danger"> {Errors.Lname} </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    onChange={handleChange}
                    value={Email}
                    type="email"
                    className="form-control"
                    id="EmailAddress"
                    placeholder="name@example.com"
                    name="Email"
                  />
                  <label htmlFor="EmailAddress">Email</label>
                  {Errors.Email && (
                    <div className="alert alert-danger"> {Errors.Email} </div>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    onChange={handleChange}
                    value={Pass}
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Aioasd123;"
                    name="Pass"
                  />
                  <label htmlFor="Password">Password</label>
                  {Errors.Pass && (
                    <div className="alert alert-danger"> {Errors.Pass} </div>
                  )}
                </div>
              </div>
              <div className="form-floating">
                <input
                  onChange={handleChange}
                  value={Home}
                  type="text"
                  className="form-control"
                  id="Address"
                  placeholder="name@example.com"
                  name="Home"
                />
                <label htmlFor="Address">Address</label>
                {Errors.Home && (
                  <div className="alert alert-danger"> {Errors.Home} </div>
                )}
              </div>
              <div className="form-floating">
                <input
                  onChange={handleChange}
                  value={Cell}
                  type="tel"
                  className="form-control"
                  id="Phone"
                  placeholder="123321321"
                  name="Cell"
                />
                <label htmlFor="Phone">Phone number</label>
                {Errors.Cell && (
                  <div className="alert alert-danger"> {Errors.Cell} </div>
                )}
              </div>
              <div className="col-12 mb-5">
                <button
                  type="submit"
                  className="btn btn-lg btn-outline-primary"
                  id="choice"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-6">
          <img src={track} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
