import React, { useEffect, useRef, useState } from "react";

//redux
import { useDispatch } from "react-redux";
import { eventsStorageHandler } from "../../../../../ReduxStore/thunks/Events/EventsStorageThunks";

//styles
import "./InputFile.scss";

function InputFile() {
  const dispatch = useDispatch();
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
      dispatch(eventsStorageHandler(imageFile));
    }
    setImageFile(null);
  }, [imageFile, dispatch]);

  return (
    <div className="small-events-input-file-container">
      <div className="small-events-input-file-control">
        <button
          className="small-events-input-file-button"
          onClick={imageSelectHandler}
        >
          +
        </button>
        <label htmlFor="photo">Add Photo</label>
        <input
          type="file"
          id="input-file-input"
          ref={file}
          style={{ display: "none" }}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}

export default InputFile;
