import React, { useContext, useRef, useState } from "react";

//context
import { IndexContext } from "../../Bartender";

//redux
import { useDispatch } from "react-redux";
import { servicesStorageHandler } from "../../../../../../ReduxStore/thunks/Bartenders/BartendersStorageThunks";

//styles
import "./InputFile.scss";
import { useEffect } from "react";

function InputFile() {
  const dispatch = useDispatch();
  const { index } = useContext(IndexContext);
  const [imageFile, setImageFile] = useState(null);
  const file = useRef();

  //allows button to listen to input
  const imageSelectHandler = (e) => {};

  //listen to changes in the input
  const onChangeHandler = (e) => {};

  useEffect(() => {}, []);

  return (
    <div className="bartender-input-file-container">
      <div className="bartender-input-file-control">
        <button className="bartender-input-file-button" id="photo">
          +
        </button>
        <label htmlFor="photo">Add Photo</label>
        <input type="file" ref={file} style={{ display: "none" }} />
      </div>
    </div>
  );
}

export default InputFile;
