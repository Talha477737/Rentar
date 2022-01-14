import React from "react";
import "../CSS/Card.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminUpdateCar from "./AdminUpdateCar";

const checkAvailable = (props) => {
  console.log(props.available);
  console.log("In function");
  if (props.available) {
    return "Available";
  } else {
    return "Not Available";
  }
};

const handledelete = (id) => {
  console.log("clicked");
  axios
    .delete(`http://localhost:3000/api/cars/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  window.location.reload();
};

const AdminCard = (props) => {
  const navigate = useNavigate();
  const handleupdate = () => {
    console.log("clicked");
    navigate(`/Admin/UpdateCar/${props.Id}`);
  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          {/* <p className="card-text">Daily Rent: {props.rent}</p> */}
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Car Status: {checkAvailable(props)}
          </small>
          <i
            className="bi bi-three-dots-vertical"
            style={{
              fontSize: "1.5rem",
              color: "#0055ff",
              marginLeft: "4rem",
            }}
            onClick={handleupdate}
          ></i>
          <i
            className="bi bi-x"
            style={{
              fontSize: "1.5rem",
              color: "red",
              marginLeft: "1rem",
            }}
            onClick={() => {
              handledelete(props.Id);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
