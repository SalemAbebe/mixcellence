import React, { useRef, useState, useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { eventsStorageHandler } from "../../../../../ReduxStore/thunks/Events/EventsStorageThunks";

//styles
import "./PreviewImage.scss";

function PreviewFile() {
  const dispatch = useDispatch();
  const [newImageFile, setNewImageFile] = useState(null);
  const imageURL = useSelector((state) => state.about.imageURL);
  const file = useRef();

  const newImageSelectHandler = (e) => {
    e.preventDefault();
    file.current.click();
  };

  const onChangeHandler = (e) => {
    setNewImageFile(e.target.files[0]);
  };

  useEffect(() => {
    if (newImageFile) {
      dispatch(eventsStorageHandler(newImageFile));
    }
  }, [newImageFile, dispatch]);

  return (
    <div>
      <input
        type="file"
        id="photo"
        ref={file}
        style={{ display: "none" }}
        onChange={onChangeHandler}
      />
      <button className="preview-image-button" onClick={newImageSelectHandler}>
        <img
          src={imageURL}
          alt="about"
          width={"424px"}
          height={"284px"}
          style={{ cursor: "pointer" }}
        />
      </button>
    </div>
  );
}

export default PreviewFile;
