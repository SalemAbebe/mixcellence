import React, { useCallback, useEffect, useRef, useState } from "react";

//firebase
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

//redux
import { useDispatch } from "react-redux";
import { heroActions } from "../../../../../ReduxStore/slices/heroSlice";

//styles
import "./InputFile.css";

function InputFile() {
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState(null);
  const file = useRef();

  const imageSelectHandler = (e) => {
    file.current.click();
  };

  const imageStorageHandler = useCallback(async () => {
    dispatch(heroActions.handleIsLoading(true));
    dispatch(heroActions.handleFilePath(`images/hero/${imageFile.name}`));
    //connect to storage
    const storage = getStorage();
    const storageRef = ref(storage, `images/hero/${imageFile.name}`);

    //save file to storage
    await uploadBytes(storageRef, imageFile).then((res) => {
      console.log(res);
    });

    //get URL for image from storage
    let imageURL = "";
    await getDownloadURL(storageRef).then((res) => {
      imageURL = res;
      dispatch(heroActions.handleImageURL(imageURL));
    });

    dispatch(heroActions.handleIsLoading(false));
  }, [imageFile, dispatch]);

  const onChangeHandler = (e) => {
    setImageFile(e.target.files[0]);
  };

  useEffect(() => {
    if (imageFile !== null) {
      imageStorageHandler();
    }
    setImageFile(null);
  }, [imageFile, imageStorageHandler]);

  return (
    <div className="input-file-container">
      <div className="input-control">
        <button className="input-button" onClick={imageSelectHandler}>
          +
        </button>
        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          id="photo"
          ref={file}
          style={{ display: "none" }}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}

export default InputFile;
