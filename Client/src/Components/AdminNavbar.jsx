import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminPurchaseBar from "./AdminPurchaseBar";
import "../CSS/AdminNavbar.css";
const AdminNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mx-auto h1" id="head">
            <Link to={`/`} style={{ textDecoration: "none" }}>
              Rentar
            </Link>
          </span>
          <i
            className="bi bi-currency-dollar me-2 shadow"
            id="pur"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
          ></i>
        </div>
      </nav>
      <AdminPurchaseBar></AdminPurchaseBar>
    </div>
  );
};

export default AdminNavbar;
