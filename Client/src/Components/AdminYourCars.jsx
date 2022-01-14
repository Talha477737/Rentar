import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCarDetails } from "../Static/Data";
import AdminCard from "./AdminCard";

// const handledelete = (id) => {
//   console.log("clicked");
//   axios
//     .delete(`http://localhost:3000/api/cars/${id}`)
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const AdminYourCars = () => {
  const [Car, setCar] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cars/")
      .then(function (response) {
        setCar(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => {};
  }, []);
  console.log(Car);
  return (
    <div>
      <div className="row">
        {Car.map((c) => (
          <div className="col-4">
            <AdminCard
              Id={c._id}
              image={c.images}
              name={c.title}
              rent={c.rent}
              location={c.location}
              available={c.isAvailable}
              // handleDelete={handledelete}
            ></AdminCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminYourCars;
