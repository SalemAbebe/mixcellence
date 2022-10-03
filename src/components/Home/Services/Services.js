import React from "react";

//data
import { servicesData } from "./ServicesData";

//redux
import { useSelector, useDispatch } from "react-redux";
import { servicesActions } from "../../../ReduxStore/slices/ServicesSlice";

//styles
import "./Services.scss";

function Services() {
  const dispatch = useDispatch();
  const showInfo = useSelector((state) => state.services.showInfo);

  const services = (index) => {
    if (showInfo !== index) {
      dispatch(servicesActions.handleShowInfo(index));
    }
  };

  return (
    <div className="services-container">
      <h1 className="service-title">Let us service you</h1>
      <div className="service-container">
        {servicesData.map((service, index) => {
          return (
            <div key={service.id} className="service-wrapper">
              <img
                className={
                  "service-img " + (showInfo === index ? "active" : "")
                }
                src={service.image}
                alt={service.title}
                onClick={() => services(index)}
              />
              {showInfo === index ? (
                <div className="info-wrapper">
                  <h3 className="bartender-heading">{service.heading}</h3>
                  <hr />
                  <p className="bartender-sub-heading">{service.subHeading}</p>
                  <p className="bartender-text">{service.text} </p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
