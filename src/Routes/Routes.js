import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import AdminDashBoard from "../pages/AdminDashBoard/AdminDashBoard";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import App from "../App";
import EditAbout from "../components/AdminDashBoard/About/EditAbout";
import EditBartenders from "../components/AdminDashBoard/Bartenders/EditBartenders";
import EditContact from "../components/AdminDashBoard/Contact/EditContact";
import EditEvents from "../components/AdminDashBoard/Events/EditEvents";
import EditFAQ from "../components/AdminDashBoard/FAQ/EditFAQ";
import EditHero from "../components/AdminDashBoard/HeroImage/EditHero";
import EditServices from "../components/AdminDashBoard/Services/EditServices";
import EditTestimonial from "../components/AdminDashBoard/Testimonial/EditTestimonial";
import Home from "../pages/Home/Home";
import Login from "../components/AdminLogin/Login/Login";

function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route element={<Home />} path="home" />
        <Route element={<AdminDashBoard />} exact path="admin">
          <Route element={<EditHero />} path="edit-hero" />
          <Route element={<EditServices />} path="edit-services" />
          <Route element={<EditAbout />} path="edit-about" />
          <Route element={<EditBartenders />} path="edit-bartenders" />
          <Route element={<EditTestimonial />} path="edit-testimonial" />
          <Route element={<EditEvents />} path="edit-events" />
          <Route element={<EditFAQ />} path="edit-FAQ" />
          <Route element={<EditContact />} path="edit-contact" />
        </Route>
        <Route element={<AdminLogin />} exact path="/login">
          <Route index element={<Login />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default RoutesPath;
