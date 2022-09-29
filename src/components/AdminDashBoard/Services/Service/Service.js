import React, { createContext } from "react";

//components
import ServiceDeleteButton from "./ServiceDeleteButton";
import ServiceForm from "./ServiceForm/ServiceForm";
import ServiceFormButton from "./ServiceFormButton";
import ServiceInputFile from "./ServiceInputFile/ServiceInputFile";

//styles
import "./Service.scss";

export const IndexContext = createContext({});

function Service({ index }) {
  return (
    <IndexContext.Provider value={{ index: index }}>
      <div className="service-container">
        <div className="service-wrapper">
          <ServiceInputFile />
          <ServiceForm />
        </div>
        <div className="service-button-wrapper">
          <ServiceDeleteButton />
          <ServiceFormButton />
        </div>
      </div>
    </IndexContext.Provider>
  );
}

export default Service;
