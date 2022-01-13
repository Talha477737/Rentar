import React, { useState } from "react";
import "../CSS/MiniSlider.css";
import Card from "../Components/Card";
import { getCarDetails } from "../Static/Data";

const MiniSlider = () => {
  const [Car] = useState(getCarDetails);

  return (
    <div id="slider">
      {Car.map((c) => (
        <Card
          key={c.Id}
          Id={c.Id}
          image={c.pic}
          name={c.Title}
          rent={c.rent}
          location={c.Location}
          availability={c.Availability}
        ></Card>
      ))}
    </div>
  );
};

export default MiniSlider;
