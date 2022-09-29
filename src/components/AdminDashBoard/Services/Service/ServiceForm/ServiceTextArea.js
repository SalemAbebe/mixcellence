import React, { useContext } from "react";

//context
import { IndexContext } from "../Service";

//redux
import { useSelector } from "react-redux";

function ServiceTextArea({ onChangeHandler, text }) {
  const { index } = useContext(IndexContext);
  const formArr = useSelector((state) => state.services.formArr);

  return (
    <div className="services-form-control">
      <label htmlFor="text">Text</label>
      <textarea
        id="text"
        cols="30"
        rows="10"
        ref={text}
        value={formArr[index]?.text || ""}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default ServiceTextArea;
