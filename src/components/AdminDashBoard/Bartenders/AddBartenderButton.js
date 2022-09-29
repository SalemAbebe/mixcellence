import React from "react";

//redux
import { useDispatch } from "react-redux";
import { bartendersActions } from "../../../ReduxStore/slices/BartendersSlice";

function AddBartenderButton() {
  const dispatch = useDispatch();

  //add Bartender Component
  const addComponentHandler = () => {
    dispatch(bartendersActions.handleIncreaseComponentArrSize(1));
  };

  return (
    <div className="edit-bartenders-control">
      <button
        id="add-bartender-section"
        className="add-bartender-section-button"
        onClick={addComponentHandler}
      >
        +
      </button>
      <label htmlFor="add-bartender-section">Add Bartender</label>
    </div>
  );
}

export default AddBartenderButton;
