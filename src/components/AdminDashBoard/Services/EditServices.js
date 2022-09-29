import React from "react";

//components
import AddServiceButton from "./AddServiceButton";
import Service from "./Service/Service";

//redux
import { useSelector } from "react-redux";

//styles
import "./EditServices.scss";

function EditServices() {
  const compArrSize = useSelector((state) => state.services.componentArrSize);

  const addComponentMap = compArrSize.map((item, index) => {
    return <Service key={item} index={index} />;
  });

  return (
    <div className="edit-services-container">
      <div className="edit-services-wrapper">
        <h1>Services</h1>
        <span />
        <div className="services-section-container">{addComponentMap}</div>
        <AddServiceButton />
      </div>
    </div>
  );
}

export default EditServices;
