import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import Navbar from "../Components/Navbar";
import { getCarDetails } from "../Static/Data";
import Content from "../Components/Content";
import "../CSS/CarSingle.css";
import MiniSlider from "../Components/MiniSlider";
const CarSingle = (props) => {
  const [Car] = useState(getCarDetails);
  return (
    <div>
      <Navbar></Navbar>
      <div className="row mt-2">
        <div className="col-6">
          {" "}
          <ImageGallery items={Car}></ImageGallery>
        </div>
        <div className="col-6" id="static">
          <Content></Content>
          <button
            type="button"
            className="btn btn-lg btn-outline-success"
            id="Rent"
          >
            Rent Now!
          </button>
          <button
            type="button"
            className="btn btn-lg btn-outline-danger ms-3"
            id="Rent"
          >
            Add to your bookings!
          </button>
        </div>
      </div>
      <div className="row mt-5" id="related">
        <p>Other Cars you may Like</p>
      </div>
      <MiniSlider></MiniSlider>
    </div>
  );
};

export default CarSingle;
