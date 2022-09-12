import React from "react";
import { NavLink } from "react-router-dom";

//components
import Welcome from "./Welcome/Welcome";

function SideBar() {
  return (
    <div>
      <Welcome />
      <button></button>
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
  );
}

export default SideBar;
