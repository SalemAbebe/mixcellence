import React, { useEffect, useRef, useState } from "react";
import "./ImageInput.scss";
// redux
import { useDispatch } from "react-redux";
import { eventsStorageHandler } from "../../../../../ReduxStore/thunks/Events/EventsStorageThunks";

const ImageInput = () => {
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
    <div>
      <div className="input-file-container events-home-wrapper columns">
        <div className=" input-file-control column-left">
          {/* <img
            className="img1"
            src={process.env.PUBLIC_URL + "Images/Events-1.png"}
            alt=""
          /> */}
          <button
            className="input-file-button img1"
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
        <div className="top-img">
          <img
            className="img2"
            src={process.env.PUBLIC_URL + "Images/Events-2.png"}
            alt=""
          />
        </div>
        <div className="bottom-img">
          <img
            className="img3"
            src={process.env.PUBLIC_URL + "Images/Events-3.png"}
            alt=""
          />
        </div>

        <div className="top-img">
          <img
            className="img4"
            src={process.env.PUBLIC_URL + "Images/Events-4.png"}
            alt=""
          />
        </div>
        <div className="bottom-img">
          <img
            className="img5"
            src={process.env.PUBLIC_URL + "Images/Events-5.png"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
