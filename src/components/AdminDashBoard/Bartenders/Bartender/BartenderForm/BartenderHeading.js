import React, { useContext } from "react";

//context
import { IndexContext } from "../Bartender";

//redux
import { useSelector } from "react-redux";

function BartenderHeading({ heading, onChangeHandler }) {
  const { index } = useContext(IndexContext);
  const formArr = useSelector((state) => state.bartenders.formArr);

  return (
    <div className="bartender-form-control">
      <label htmlFor="heading">Heading</label>
      <input
        id="heading"
        placeholder="Enter heading..."
        ref={heading}
        type="text"
        value={formArr[index]?.heading || ""}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default BartenderHeading;
