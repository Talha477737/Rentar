import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Landing.css";
const Landing = () => {
  return (
    <div className="container shadow-lg p-3 mb-5 mt-4" id="landing">
      <p id="simple">Rent any car with </p> <h3 id="head">Rentar</h3>
      <div id="bodytext" style={{ marginTop: "200px" }}>
        <Link to={`/Cars`}>
          <button
            type="button"
            className="btn btn-lg btn-outline-warning"
            id="choice"
          >
            Rent a car NOW!
          </button>
        </Link>{" "}
        OR{" "}
        <Link to={`/Signin`}>
          <button
            type="button"
            className="btn btn-lg btn-outline-danger"
            id="choice"
          >
            Rent your car to others
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
