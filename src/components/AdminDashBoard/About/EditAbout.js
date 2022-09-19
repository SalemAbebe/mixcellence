import React, { useState } from "react";

//firebase
import { app } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

function EditAbout() {
  const [hero, setHero] = useState({
    heading: "",
    text: "",
    photo: "",
  });

  const onChangeHandler = (e) => {
    setHero((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addDocsHandler = async (e) => {
    e.preventDefault();

    const ref = collection(app, "about");

    await addDoc(ref, {
      heading: hero.heading,
      text: hero.text,
      photo: hero.photo,
    });

    setHero({
      heading: "",
      text: "",
      photo: "",
    });
  };
  return (
    <form onSubmit={addDocsHandler}>
      <label htmlFor="heading">Heading</label>
      <input
        type="text"
        id="heading"
        name="heading"
        value={hero.heading}
        onChange={onChangeHandler}
      />
      <label htmlFor="text">Text</label>
      <input
        type="text"
        id="text"
        name="text"
        value={hero.text}
        onChange={onChangeHandler}
      />
      <label htmlFor="photo">Photo</label>
      <input
        type="text"
        id="photo"
        name="photo"
        value={hero.photo}
        onChange={onChangeHandler}
      />
      <button>Save</button>
    </form>
  );
}

export default EditAbout;
