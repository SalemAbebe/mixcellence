import React, { useRef, useState, useEffect } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { updateHeroStorageHandler } from "../../../../../ReduxStore/thunks/Hero/HeroStorageThunks";

function PreviewImage() {
  const dispatch = useDispatch();
  const [newImageFile, setNewImageFile] = useState(null);
  const filePath = useSelector((state) => state.hero.backEnd.filePath);
  const heroInfo = useSelector((state) => state.hero.backEnd.heroInfo);
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
    if (newImageFile !== null) {
      dispatch(updateHeroStorageHandler(newImageFile, filePath));
    }
    setNewImageFile(null);
  }, [filePath, newImageFile, dispatch]);

  return (
    <div>
      <input
        type="file"
        id="photo"
        ref={file}
        style={{ display: "none" }}
        onChange={onChangeHandler}
      />
      <button onClick={newImageSelectHandler}>
        <img
          src={heroInfo.photo ? heroInfo.photo : ""}
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
