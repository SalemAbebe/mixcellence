import React, { useContext } from "react";

//context
import { IndexContext } from "./Service";

//redux
import { useSelector } from "react-redux";

function ServiceFormButton() {
  const { index } = useContext(IndexContext);
  const dataId = useSelector((state) => state.services.dataId);

  return (
    <div className="service-form-button-control">
      <button form={index} className="service-form-button" type="submit">
        {dataId[index] !== undefined ? "Update" : "Save"}
      </button>
    </div>
  );
}

export default ServiceFormButton;
