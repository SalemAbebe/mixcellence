import React, { useContext } from "react";

//context
import { IndexContext } from "../Bartender";

//redux
import { useSelector } from "react-redux";

function BartenderTextArea({ onChangeHandler, text }) {
  const { index } = useContext(IndexContext);
  const formArr = useSelector((state) => state.bartenders.formArr);

  return (
    <div className="bartender-form-control">
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

export default BartenderTextArea;
