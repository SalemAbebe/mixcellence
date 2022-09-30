import React, { useContext } from "react";

//context
import { IndexContext } from "../Bartender";

//redux
import { useSelector } from "react-redux";

function BartenderFacebook({ facebook, facebookSelected, onChangeHandler }) {
  const { index } = useContext(IndexContext);
  const formArr = useSelector((state) => state.bartenders.formArr);

  return (
    <div className="bartender-form-control">
      <div className="label-wrapper">
        <label htmlFor="facebook">Check to display Facebook</label>
        <div>
          <input
            id="facebook-checkbox"
            className="social-media-checkbox"
            ref={facebookSelected}
            type="checkbox"
            checked={formArr[index]?.facebook.selected || false}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <input
        id="facebook"
        placeholder="Paste bartender facebook link here..."
        type="text"
        ref={facebook}
        value={formArr[index]?.facebook.link || ""}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default BartenderFacebook;
