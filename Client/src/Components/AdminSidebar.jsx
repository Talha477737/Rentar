import React from "react";
import "../CSS/AdminSidebar.css";
import caricon from "../Assets/caricon.svg";
import { Link } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <div className="ms-3">
      <Link to={`/Admin/AddNewCar`} style={{ textDecoration: "none" }}>
        <div
          className="card border-primary mb-3 mt-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-body text-primary" id="add">
            <h5 className="card-title ">
              <i
                className="bi bi-plus-circle"
                style={{
                  fontSize: "3rem",
                  color: "#0055ff",
                }}
              ></i>
            </h5>
            <p className="card-text">Add New Car</p>
          </div>
        </div>
      </Link>

      <Link to={`/Admin/YourCars`} style={{ textDecoration: "none" }}>
        <div
          className="card border-primary mb-3 mt-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-body text-primary" id="add">
            <h5 className="card-title ">
              <img
                src={caricon}
                alt="car-icon"
                style={{ width: "5rem", height: "5rem" }}
              />
            </h5>
            <p className="card-text">Your Cars</p>
          </div>
        </div>
      </Link>

      <div
        className="card border-primary mb-3 mt-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body text-primary" id="add">
          <h5 className="card-title ">
            <i
              className="bi bi-envelope-open"
              style={{
                fontSize: "3rem",
                color: "#0055ff",
              }}
            ></i>
          </h5>
          <p className="card-text">Car Requests</p>
        </div>
      </div>
      <div
        className="card border-primary mb-3 mt-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body text-primary" id="add">
          <h5 className="card-title ">
            <i
              className="bi bi-person-check"
              style={{
                fontSize: "3rem",
                color: "#0055ff",
              }}
            ></i>
          </h5>
          <p className="card-text">Cars on Rent</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
