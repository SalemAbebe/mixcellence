import React, { useContext, useEffect, useRef, useState } from "react";

//context
import { IndexContext } from "../../Bartender";

//redux
import { useDispatch } from "react-redux";
import { bartendersStorageHandler } from "../../../../../../ReduxStore/thunks/Bartenders/BartendersStorageThunks";

//styles
import "./InputFile.scss";

function InputFile() {
  const dispatch = useDispatch();
  const { index } = useContext(IndexContext);
  const [imageFile, setImageFile] = useState(null);
  const file = useRef();

  //allows button to listen to input
  const imageSelectHandler = (e) => {
    file.current.click();
  };

  //listen to changes in the input
  const onChangeHandler = (e) => {
    setImageFile(e.target.files[0]);
  };

  useEffect(() => {
    if (imageFile !== null) {
      dispatch(bartendersStorageHandler(imageFile, index));
    }
    setImageFile(null);
  }, [imageFile, index, dispatch]);

  return (
    <div className="bartender-input-file-container">
      <div className="bartender-input-file-control">
        <button
          className="bartender-input-file-button"
          id="photo"
          onClick={imageSelectHandler}
        >
          +
        </button>
        <label htmlFor="photo">Add Photo</label>
        <input
          type="file"
          ref={file}
          style={{ display: "none" }}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}

export default InputFile;
