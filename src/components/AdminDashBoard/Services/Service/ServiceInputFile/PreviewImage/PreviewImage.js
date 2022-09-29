import React, { useContext, useEffect, useRef, useState } from "react";

//context
import { IndexContext } from "../../Service";

//redux
import { useDispatch, useSelector } from "react-redux";
import { servicesStorageHandler } from "../../../../../../ReduxStore/thunks/Services/ServicesStorageThunks";

//styles
import "./PreviewImage.scss";

function PreviewImage() {
  const dispatch = useDispatch();
  const { index } = useContext(IndexContext);
  const [newImageFile, setNewImageFile] = useState(null);
  const imageURL = useSelector((state) => state.services.imageURL);
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
      dispatch(servicesStorageHandler(newImageFile, index));
    }
  }, [newImageFile, index, dispatch]);

  return (
    <div className="service-preview-image-container">
      <input
        type="file"
        id="photo"
        ref={file}
        style={{ display: "none" }}
        onChange={onChangeHandler}
      />
      <button
        className="service-preview-image-button"
        onClick={newImageSelectHandler}
      >
        <img
          src={imageURL[index]}
          alt="services"
          width={"308px"}
          height={"345px"}
          style={{ cursor: "pointer" }}
        />
      </button>
    </div>
  );
}

export default PreviewImage;
