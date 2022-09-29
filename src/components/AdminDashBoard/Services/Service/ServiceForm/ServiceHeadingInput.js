import React, { useContext } from "react";

//context
import { IndexContext } from "../Service";

//redux
import { useSelector } from "react-redux";

function ServiceHeadingInput({ heading, onChangeHandler }) {
  const { index } = useContext(IndexContext);
  const formArr = useSelector((state) => state.services.formArr);

  return (
    <div className="service-form-control">
      <label htmlFor="heading">Heading</label>
      <input
        id="heading"
        ref={heading}
        type="text"
        value={formArr[index]?.heading || ""}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default ServiceHeadingInput;
