import React, { useRef, useState, useCallback, useEffect } from "react";

//firebase
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

//redux
import { useDispatch, useSelector } from "react-redux";
import { heroActions } from "../../../../../ReduxStore/slices/heroSlice";

function PreviewImage() {
  const dispatch = useDispatch();
  const [newImageFile, setNewImageFile] = useState(null);
  const imageURL = useSelector((state) => state.hero.backEnd.imageURL);
  const filePath = useSelector((state) => state.hero.backEnd.filePath);
  const file = useRef();

  const newImageSelectHandler = (e) => {
    e.preventDefault();
    file.current.click();
  };
  console.log(filePath);

  const newImageStorageHandler = useCallback(async () => {
    dispatch(heroActions.handleIsLoading(true));

    //check if old file path and new file path match. Then delete old file if they don't match.
    if (filePath !== `image/hero/${newImageFile.name}`) {
      //connect to storage
      const storage = getStorage();
      const storageRef = ref(storage, filePath);

      //delete old image
      deleteObject(storageRef).then((res) => {
        console.log(res);
      });
    }

    dispatch(heroActions.handleFilePath(`images/hero/${newImageFile.name}`));
    //connect to storage
    const storage = getStorage();
    const storageRef = ref(storage, `images/hero/${newImageFile.name}`);

    //save new file to storage
    await uploadBytes(storageRef, newImageFile).then((res) => {
      console.log(res);
    });

    //get URL for new image from storage
    let imageURL = "";
    await getDownloadURL(storageRef).then((res) => {
      imageURL = res;
      dispatch(heroActions.handleImageURL(imageURL));
    });

    dispatch(heroActions.handleIsLoading(false));
  }, [filePath, newImageFile, dispatch]);

  const onChangeHandler = (e) => {
    setNewImageFile(e.target.files[0]);
  };

  useEffect(() => {
    if (newImageFile !== null) {
      newImageStorageHandler();
    }
    setNewImageFile(null);
  }, [newImageFile, newImageStorageHandler]);

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
        <img src={imageURL} alt="hero" width={"424px"} height={"284px"} />
      </button>
    </div>
  );
}

export default PreviewImage;
