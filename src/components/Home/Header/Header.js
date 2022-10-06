import React from "react";

//styles
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <a className="header-name" href="#hero">
        MIXELLENCE
      </a>
      <ul className="header-list">
        <li className="header-item">
          <a className="header-links" href="#events">
            Events
          </a>
        </li>
        <li className="header-item">
          <a className="header-links" href="#bartenders">
            Bartenders
          </a>
        </li>
        <li className="header-item">
          <a className="header-links" href="#faq">
            FAQ
          </a>
        </li>
      </ul>
      <a className="header-book-us" href="#book-us">
        Book us!
      </a>
    </div>
  );
};

export default Header;
