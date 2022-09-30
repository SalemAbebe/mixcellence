import React, { useContext } from "react";

//context
import { IndexContext } from "./Bartender";

//redux
import { useSelector } from "react-redux";

function BartenderFormButton() {
  const { index } = useContext(IndexContext);
  const dataId = useSelector((state) => state.bartenders.dataId);

  return (
    <div className="bartender-form-button-control">
      <button className="bartender-form-button" form={index}>
        {dataId[index] !== undefined ? "Update" : "Save"}
      </button>
    </div>
  );
}

export default BartenderFormButton;
