import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import track from "../Assets/car-form.gif";
import "../CSS/Signin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Joi from "joi-browser";

const Signin = () => {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const navigate = useNavigate();
  const [Errors, setErrors] = useState([]);

  const schema = {
    Email: Joi.string().required().label("Email"),
    Pass: Joi.string().required().label("Password"),
  };

  const validate = () => {
    const Data = { Email, Pass };
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
    else setPass(input.value);
    setErrors(errors);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="row">
        <div className="col-6">
          {" "}
          <form id="form" onSubmit={handleSubmit}>
            <div className="container mt-5">
              <div className="form-floating mb-3">
                <input
                  value={Email}
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  id="EmailAddress"
                  placeholder="name@example.com"
                  name="Email"
                />
                <label htmlFor="EmailAddress">Email address</label>
                {Errors.Email && (
                  <div className="alert alert-danger"> {Errors.Email} </div>
                )}
              </div>
              <div className="form-floating">
                <input
                  value={Pass}
                  onChange={handleChange}
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  name="Pass"
                />
                <label htmlFor="Password">Password</label>
                {Errors.Pass && (
                  <div className="alert alert-danger"> {Errors.Pass} </div>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-outline-primary"
                id="choice"
                style={{ marginTop: 10, display: "inline-block" }}
              >
                Sign In
              </button>
              <Link to={`/Signup`}>
                <span
                  class="badge bg-primary"
                  id="cont"
                  style={{
                    marginInline: 10,
                    display: "inline-block",
                    cursor: "pointer",
                  }}
                >
                  Don't have an account?
                </span>
              </Link>
            </div>
          </form>
        </div>
        <div className="col-6">
          <img src={track} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
