import React, { useContext, useEffect, useRef, useState } from "react";
//context
import { IndexContext } from "../../../../Services/Service/Service";

//styles
import "./PreviewImage.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import { servicesStorageHandler } from "../../../../../../ReduxStore/thunks/Bartenders/BartendersStorageThunks";

function PreviewFile() {
  const dispatch = useDispatch();
  const { index } = useContext(IndexContext);
  const [newImageFile, setNewImageFile] = useState(null);
  const imageURL = useSelector((state) => state.bartenders.imageURL);
  const file = useRef();

  const newImageSelectHandler = (e) => {};

  const onChangeHandler = (e) => {};

  useEffect(() => {}, []);

  return (
    <div className="bartender-preview-image-container">
      <input type="file" id="photo" ref={file} style={{ display: "none" }} />
      <button className="service-preview-image-button">
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

export default PreviewFile;
