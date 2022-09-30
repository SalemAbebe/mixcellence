import React, { useContext } from "react";

//context
import { IndexContext } from "../Bartender";

//redux
import { useSelector } from "react-redux";

function BartenderTwitter({ onChangeHandler, twitter, twitterSelected }) {
  const { index } = useContext(IndexContext);
  const formArr = useSelector((state) => state.bartenders.formArr);

  return (
    <div className="bartender-form-control">
      <div className="label-wrapper">
        <label htmlFor="facebook">Twitter</label>
        <input
          className="social-media-checkbox"
          ref={twitterSelected}
          type="checkbox"
          checked={formArr[index]?.twitter.selected || false}
          onChange={onChangeHandler}
        />
      </div>
      <input
        type="text"
        id="facebook"
        ref={twitter}
        value={formArr[index]?.twitter.link || ""}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default BartenderTwitter;
