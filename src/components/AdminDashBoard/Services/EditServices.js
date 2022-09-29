import React from "react";

//components
import Service from "./Service/Service";

//redux
import { useDispatch, useSelector } from "react-redux";
import { servicesActions } from "../../../ReduxStore/slices/ServicesSlice";

//styles
import "./EditServices.scss";

function EditServices() {
  const dispatch = useDispatch();
  const compArrSize = useSelector((state) => state.services.componentArrSize);

  //add Service Component
  const addComponentHandler = () => {
    if (compArrSize.length < 4) {
      dispatch(servicesActions.handleIncreaseComponentArrSize(1));
    }
  };

  const addComponentMap = compArrSize.map((item, index) => {
    return <Service key={item} index={index} />;
  });

  return (
    <div className="edit-services-container">
      <div className="section-container">{addComponentMap}</div>
      <div className="edit-services-control">
        <button
          id="add-section"
          className="add-section-button"
          onClick={addComponentHandler}
        >
          +
        </button>
        <label htmlFor="add-section">Add Section</label>
      </div>
    </div>
  );
}

export default EditServices;
