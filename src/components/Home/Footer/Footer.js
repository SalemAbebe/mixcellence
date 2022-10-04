import React from "react";

//icons
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

//react router
import { NavLink } from "react-router-dom";

//styles
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-title">Mixellence</p>
      <p className="footer-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas amet,
        quam id sollicitudin aliquet eros, bibendum.
      </p>
      <ul className="footer-list">
        <li className="footer-item">
          <a href="#events" className="footer-link">
            Events
          </a>
        </li>
        <li className="footer-item">
          <a href="#bartenders" className="footer-link">
            Bartenders
          </a>
        </li>
        <li className="footer-item">
          <a href="#faq" className="footer-link">
            FAQ
          </a>
        </li>
      </ul>
      <div className="social-wrapper">
        <NavLink to="#instagram">
          <FaInstagram />
        </NavLink>
        <NavLink to="#twitter">
          <FaTwitter />
        </NavLink>
        <NavLink to="#facebook">
          <FaFacebookF />
        </NavLink>
      </div>
      <NavLink className="login-link" to="/login" />
    </div>
  );
};

export default Footer;
