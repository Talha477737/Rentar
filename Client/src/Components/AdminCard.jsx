import React from "react";
import "../CSS/Card.css";
const AdminCard = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          {/* <p className="card-text">Daily Rent: {props.rent}</p> */}
        </div>
        <div className="card-footer">
          <small className="text-muted">Car Status: {props.availability}</small>
          <i
            className="bi bi-three-dots-vertical "
            style={{ fontSize: "1.5rem", color: "#0055ff" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
