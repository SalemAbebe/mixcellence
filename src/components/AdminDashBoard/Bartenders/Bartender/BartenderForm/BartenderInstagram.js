import React, { useContext } from "react";

//context
import { IndexContext } from "../Bartender";

//redux
import { useSelector } from "react-redux";

function BartenderInstagram({ instagram, instagramSelected, onChangeHandler }) {
  const { index } = useContext(IndexContext);
  const formArr = useSelector((state) => state.bartenders.formArr);

  return (
    <div className="bartender-form-control">
      <div className="label-wrapper">
        <label htmlFor="instagram">Check to display Instagram</label>
        <input
          className="social-media-checkbox"
          ref={instagramSelected}
          type="checkbox"
          checked={formArr[index]?.instagram.selected || false}
          onChange={onChangeHandler}
        />
      </div>
      <input
        id="instagram"
        placeholder="Paste bartender instagram link here..."
        ref={instagram}
        type="text"
        value={formArr[index]?.instagram.link || ""}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default BartenderInstagram;
