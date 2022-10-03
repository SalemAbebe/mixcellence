import React from "react";

//data
import { bartendersData } from "./BartenderData";

//icons
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

//react-router
import { NavLink } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { bartendersActions } from "../../../ReduxStore/slices/BartendersSlice";

//styles
import "./Bartenders.scss";

function Bartenders() {
  const dispatch = useDispatch();
  const showInfo = useSelector((state) => state.bartenders.showInfo);

  const bartenders = (index) => {
    if (showInfo !== index) {
      dispatch(bartendersActions.handleShowInfo(index));
    }
  };

  return (
    <div className="bartenders-container">
      <h1 className="bartenders-title">Meet Your Bartender</h1>
      <div className="bartenders-wrapper">
        {bartendersData.map((bartender, index) => {
          return (
            <div className="bartender-wrapper" key={bartender.id}>
              <img
                src={bartender.image}
                alt={bartender.heading}
                className={
                  "bartender-img " + (showInfo === index ? "active" : "")
                }
                onClick={() => bartenders(index)}
              />
              {showInfo === index ? (
                <div className="bartender-info-wrapper">
                  <h3 className="bartender-heading">{bartender.heading}</h3>
                  <hr />
                  <p className="bartender-sub-heading">
                    {bartender.subHeading}
                  </p>
                  <p className="bartender-text">{bartender.text}</p>
                  <hr />
                  <div className="bartender-icon-wrapper">
                    {bartender.instagram.selected && (
                      <NavLink to={bartender.instagram.link}>
                        <FaInstagramSquare />
                      </NavLink>
                    )}
                    {bartender.twitter.selected && (
                      <NavLink to={bartender.twitter.link}>
                        <FaTwitter />
                      </NavLink>
                    )}
                    {bartender.facebook.selected && (
                      <NavLink to={bartender.facebook.link}>
                        <FaFacebookSquare />
                      </NavLink>
                    )}
                  </div>
                  <hr />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bartenders;
