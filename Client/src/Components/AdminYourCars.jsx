import React, { useState } from "react";
import { getCarDetails } from "../Static/Data";
import AdminCard from "./AdminCard";

const AdminYourCars = () => {
  const [Car] = useState(getCarDetails);

  return (
    <div>
      <div className="row">
        {Car.map((c) => (
          <div className="col-4">
            <AdminCard
              Id={c.Id}
              image={c.pic}
              name={c.Title}
              rent={c.rent}
              location={c.Location}
              availability={c.Availability}
            ></AdminCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminYourCars;
