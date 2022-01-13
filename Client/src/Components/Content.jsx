import React from "react";
import "../CSS/Content.css";
const Content = () => {
  return (
    <div>
      {" "}
      <div className="d-flex align-items-end justify-content-start">
        <p>Car Name:</p>
        <p className="ms-4" id="dynamic">
          Audi Q5
        </p>
      </div>
      <div className="d-flex align-items-end justify-content-start">
        <p>Rent:</p>
        <p className="ms-4" id="dynamic">
          Rs: 10000
        </p>
      </div>
      <div className="d-flex align-items-end justify-content-start">
        <p>Location:</p>
        <p className="ms-4" id="dynamic">
          Lahore, Warehouse
        </p>
      </div>
      <div className="d-flex align-items-end justify-content-start">
        <p>Avaiability:</p>
        <p className="ms-4" id="dynamic">
          Available
        </p>
      </div>
    </div>
  );
};

export default Content;
