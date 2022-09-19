import React, { useRef, useState, useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { heroStorageHandler } from "../../../../../ReduxStore/thunks/Hero/HeroStorageThunks";

//styles
import "./PreviewImage.scss";

function PreviewImage() {
  const dispatch = useDispatch();
  const [newImageFile, setNewImageFile] = useState(null);
  const imageURL = useSelector((state) => state.hero.backEnd.imageURL);
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
      dispatch(heroStorageHandler(newImageFile));
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
          alt="hero"
          width={"424px"}
          height={"284px"}
          style={{ cursor: "pointer" }}
        />
      </button>
    </div>
  );
}

export default PreviewImage;
