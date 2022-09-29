import React, { useContext } from "react";

//context
import { IndexContext } from "../Bartender";

//redux
import { useSelector } from "react-redux";

function BartenderSubHeading({ onChangeHandler, subHeading }) {
  const { index } = useContext(IndexContext);
  const formArr = useSelector((state) => state.bartenders.formArr);

  return (
    <div className="bartender-form-control">
      <label htmlFor="subHeading">Sub-Heading</label>
      <input
        id="subHeading"
        ref={subHeading}
        type="text"
        value={formArr[index]?.subHeading || ""}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default BartenderSubHeading;
