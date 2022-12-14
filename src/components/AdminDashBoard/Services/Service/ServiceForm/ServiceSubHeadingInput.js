import React, { useContext } from "react";

//context
import { IndexContext } from "../Service";

//redux
import { useSelector } from "react-redux";

function ServiceSubHeadingInput({ onChangeHandler, subHeading }) {
  const { index } = useContext(IndexContext);
  const formArr = useSelector((state) => state.services.formArr);

  return (
    <div className="service-form-control">
      <label htmlFor="subHeading">Sub-Heading</label>
      <input
        id="subHeading"
        placeholder="Enter sub-heading..."
        ref={subHeading}
        type="text"
        value={formArr[index]?.subHeading || ""}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default ServiceSubHeadingInput;
