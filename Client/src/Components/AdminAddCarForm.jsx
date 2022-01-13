import React from "react";
import "../CSS/AdminAddCarForm.css";
const AdminAddCarForm = (props) => {
  return (
    <div>
      <form className="row g-3 shadow" id="form">
        <div className="col-md-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Car Name</label>
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Car Registration ID</label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              style={{ color: "#0055ff" }}
            >
              <option selected>GT Road, Warehouse, Lahore</option>
              <option value="1">Gulberg, Warehouse, Lahore</option>
              <option value="2">Model Town Warehouse, Lahore</option>
              <option value="3">Thokar Warehouse, Lahore</option>
            </select>
            <label for="floatingSelect">Preferred DropOff Location</label>
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingInput"
              placeholder="Aioasd123;"
            />
            <label for="floatingInput">Rent</label>
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

export default AdminAddCarForm;
