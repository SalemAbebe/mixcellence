import React from "react";
import { NavLink } from "react-router-dom";
// styles
import "./SideBar.scss";
//components
import Welcome from "./Welcome/Welcome";

function SideBar() {
  return (
    <div className="section-wrapper">
      <div className="admin-header">MIXCELLENCE</div>
      <div className="sidebar">
        <Welcome />
        <button className="btn-icon">
          <NavLink to={"/"}>
            <img
              className="home-icon"
              src={process.env.PUBLIC_URL + "Images/home-icon.png"}
              alt="home-icon"
            />
          </NavLink>
        </button>
        <ul>
          <li>
            <NavLink to={"/admin/edit-hero"}>Hero Image</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/edit-services"}>Services</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/edit-about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/edit-bartenders"}>Bartenders</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/edit-testimonial"}>Testimonial</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/edit-events"}>Events</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/edit-FAQ"}>FAQ</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/edit-contact"}>Contact</NavLink>
          </li>
        </ul>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default SideBar;
