import React, { useState } from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import CarArchive from "./Pages/CarArchive";
import CarSingle from "./Pages/CarSingle";
import AdminAddCarForm from "./Components/AdminAddCarForm";
import AdminUpdateCar from "./Components/AdminUpdateCar";

import { Routes, Route } from "react-router";
import Admin from "./Pages/Admin";
import AdminYourCars from "./Components/AdminYourCars";
import Navbar from "./Components/Navbar";

function App() {
  const [Data, setData] = useState([]);
  return (
    <div>
      <Routes>
        <Route path="Admin" element={<Admin data={Data} setdata={setData} />}>
          <Route path="AddNewCar" element={<AdminAddCarForm />} />
          <Route path="YourCars" element={<AdminYourCars />} />
          <Route path="UpdateCar/:id" element={<AdminUpdateCar />} />
        </Route>
        <Route
          path="Cars/:Id"
          element={<CarSingle data={Data} setdata={setData} />}
        ></Route>
        <Route
          path="Cars"
          element={<CarArchive data={Data} setdata={setData} />}
        ></Route>
        <Route path="Signin" element={<Signin />}></Route>
        <Route path="Signup" element={<Signup />}></Route>
        <Route path="/" element={<Landing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
