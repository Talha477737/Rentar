import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Card.css";
const Card = (props) => {
  return (
    <div>
      <Link
        to={`/Cars/${props.Id}`}
        style={{ textDecoration: "none", color: "Black" }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Daily Rent: {props.rent}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
