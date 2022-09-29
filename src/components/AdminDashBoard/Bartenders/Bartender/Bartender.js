import React, { createContext } from "react";

//components
import BartenderDeleteButton from "./BartenderDeleteButton";
import BartenderForm from "./BartenderForm/BartenderForm";
import BartenderFormButton from "./BartenderFormButton";
import BartenderInputFile from "./BartenderInputFile/BartenderInputFile";

//styles
import "./Bartender.scss";

export const IndexContext = createContext({});

function Bartender({ index }) {
  return (
    <IndexContext.Provider value={{ index: index }}>
      <div className="bartender-container">
        <div className="bartender-wrapper">
          <BartenderInputFile />
          <BartenderForm />
        </div>
        <div className="bartender-button-wrapper">
          <BartenderDeleteButton />
          <BartenderFormButton />
        </div>
      </div>
    </IndexContext.Provider>
  );
}

export default Bartender;
