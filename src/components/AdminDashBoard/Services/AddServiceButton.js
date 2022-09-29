import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { servicesActions } from "../../../ReduxStore/slices/ServicesSlice";

function AddServiceButton() {
  const dispatch = useDispatch();
  const compArrSize = useSelector((state) => state.services.componentArrSize);

  //add Service Component
  const addComponentHandler = () => {
    if (compArrSize.length < 4) {
      dispatch(servicesActions.handleIncreaseComponentArrSize(1));
    }
  };

  return (
    <div className="edit-services-control">
      <button
        id="add-service-section"
        className="add-service-section-button"
        onClick={addComponentHandler}
      >
        +
      </button>
      <label htmlFor="add-service-section">Add Service</label>
    </div>
  );
}

export default AddServiceButton;
