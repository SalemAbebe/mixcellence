import React, { useEffect, useRef, useState, useContext } from "react";

//context
import { IndexContext } from "../../Service";

//redux
import { useDispatch } from "react-redux";
import { servicesStorageHandler } from "../../../../../../ReduxStore/thunks/Services/ServicesStorageThunks";

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
      dispatch(servicesStorageHandler(imageFile, index));
    }
    setImageFile(null);
  }, [imageFile, index, dispatch]);

  return (
    <div className="input-file-container">
      <div className="input-file-control">
        <button className="input-file-button" onClick={imageSelectHandler}>
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
