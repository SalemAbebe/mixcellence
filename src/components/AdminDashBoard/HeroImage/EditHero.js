import React, { useRef, useState, useCallback } from "react";

//firebase
import { app } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { useEffect } from "react";

function EditHero() {
  const [hero, setHero] = useState({
    heading: "",
    subHeading: "",
  });
  const [image, setImage] = useState(null);
  const [URL, setURL] = useState("");
  const file = useRef(null);

  const imageSelectHandler = async (e) => {
    e.preventDefault();
    file.current.click();
  };

  const imageStorageHandler = useCallback(async () => {
    const storage = getStorage();
    const storageRef = ref(storage, `images/hero/${image.name}`);

    await uploadBytes(storageRef, image).then((res) => {
      console.log(res);
    });

    await getMetadata(storageRef).then((res) => {
      console.log(res);
    });

    let imageURL = "";
    await getDownloadURL(storageRef).then((res) => {
      imageURL = res;
      setURL(imageURL);
    });
  }, [image]);
  console.log(URL);

  const onChangeHandler = (e) => {
    setHero((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    setImage(e.target.files[0]);
  };

  const saveHeroHandler = async (e) => {
    e.preventDefault();

    // const firestoreRef = collection(app, "hero-image");
    // await addDoc(firestoreRef, {
    //   heading: hero.heading.current.value,
    //   subHeading: hero.subHeading.current.value,
    // });
  };

  useEffect(() => {
    if (image !== null) {
      imageStorageHandler();
    }
    setImage(null);
  }, [image, imageStorageHandler]);

  return (
    <>
      <form onSubmit={saveHeroHandler}>
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="heading"
          name="heading"
          onChange={onChangeHandler}
        />
        <label htmlFor="sub-heading">Sub-Heading</label>
        <input
          type="text"
          id="sub-heading"
          name="subHeading"
          onChange={onChangeHandler}
        />
        <button>Save</button>
      </form>
      {URL ? (
        <div>
          <input
            type="file"
            id="photo"
            ref={file}
            style={{ display: "none" }}
            onChange={onChangeHandler}
          />
          <button onClick={imageSelectHandler}>
            <img src={URL} alt="hero" />
          </button>
        </div>
      ) : (
        <div>
          <label htmlFor="photo">Photo</label>
          <input
            type="file"
            id="photo"
            ref={file}
            style={{ display: "none" }}
            onChange={onChangeHandler}
          />
          <button onClick={imageSelectHandler}>+</button>
        </div>
      )}
    </>
  );
}

export default EditHero;
