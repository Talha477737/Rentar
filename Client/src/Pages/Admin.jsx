import React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar";
import { Outlet } from "react-router";

const Admin = (props) => {
  return (
    <div id="main">
      <AdminNavbar></AdminNavbar>
      <div className="row">
        <div className="col-3">
          <AdminSidebar></AdminSidebar>
        </div>
        <div className="col-8 mt-3">
          <Outlet data={props.data} setdata={props.setdata} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
