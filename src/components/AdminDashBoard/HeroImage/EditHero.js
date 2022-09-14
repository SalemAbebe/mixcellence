import React, { useRef } from "react";

//firebase
import { app } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";

function EditHero() {
  const [photoFile, setPhotoFile] = useState(null);
  const heading = useRef();
  const subHeading = useRef();
  const photo = useRef();

  const onChangeHandler = (e) => {
    setPhotoFile(e.target.files[0]);
  };
  console.log(photoFile);

  const photoHandler = async (e) => {
    e.preventDefault();
    photo.current.click();
  };

  const addDocsHandler = async (e) => {
    e.preventDefault();

    const storage = getStorage();
    const storageRef = ref(storage, `${photoFile.name}`);
    await uploadBytes(storageRef, photoFile).then((res) => {
      console.log(res);
    });

    let imageUrl = "";
    await getDownloadURL(storageRef).then((url) => {
      imageUrl = url;
    });
    console.log(imageUrl);

    const firestoreRef = collection(app, "hero-image");
    await addDoc(firestoreRef, {
      heading: heading.current.value,
      subHeading: subHeading.current.value,
      photo: imageUrl,
    });
  };
  return (
    <form onSubmit={addDocsHandler}>
      <label htmlFor="heading">Heading</label>
      <input type="text" id="heading" name="heading" ref={heading} />
      <label htmlFor="sub-heading">Sub-Heading</label>
      <input type="text" id="sub-heading" name="subHeading" ref={subHeading} />
      <div>
        <label htmlFor="photo">Photo</label>
        <input
          type="file"
          id="photo"
          name="photo"
          ref={photo}
          style={{ display: "none" }}
          onChange={onChangeHandler}
        />
        <button onClick={photoHandler}>+</button>
      </div>
      <button>Save</button>
    </form>
  );
}

export default EditHero;
