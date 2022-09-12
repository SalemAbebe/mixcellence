import React, { useState } from "react";

//firebase
import { app } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

function EditHero() {
  const [hero, setHero] = useState({
    heading: "",
    subHeading: "",
    photo: "",
  });

  const onChangeHandler = (e) => {
    setHero((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addDocsHandler = async (e) => {
    e.preventDefault();

    const ref = collection(app, "hero-image");

    await addDoc(ref, {
      heading: hero.heading,
      subHeading: hero.subHeading,
      photo: hero.photo,
    });

    setHero({
      heading: "",
      subHeading: "",
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
      <label htmlFor="sub-heading">Sub-Heading</label>
      <input
        type="text"
        id="sub-heading"
        name="subHeading"
        value={hero.subHeading}
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

export default EditHero;
