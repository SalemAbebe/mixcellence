import React, { useContext, useEffect, useRef, useState } from "react";
//context
import { IndexContext } from "../../Bartender";

//styles
import "./PreviewImage.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import { bartendersStorageHandler } from "../../../../../../ReduxStore/thunks/Bartenders/BartendersStorageThunks";

function PreviewFile() {
  const dispatch = useDispatch();
  const { index } = useContext(IndexContext);
  const [newImageFile, setNewImageFile] = useState(null);
  const imageURL = useSelector((state) => state.bartenders.imageURL);
  const file = useRef();
  console.log(imageURL);

  const newImageSelectHandler = (e) => {
    file.current.click();
  };

  const onChangeHandler = (e) => {
    setNewImageFile(e.target.files[0]);
  };

  useEffect(() => {
    if (newImageFile) {
      dispatch(bartendersStorageHandler(newImageFile, index));
    }
  }, [newImageFile, index, dispatch]);

  return (
    <div className="bartender-preview-image-container">
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
          alt="bartenders"
          width={"308px"}
          height={"345px"}
          style={{ cursor: "pointer" }}
        />
      </button>
    </div>
  );
}

export default PreviewFile;
