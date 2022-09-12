import React, { useState } from "react";

//firebase
import { app } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

function EditFAQ() {
  const [FAQ, setFAQ] = useState({
    heading: "",
    text: "",
  });

  const onChangeHandler = (e) => {
    setFAQ((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addDocsHandler = async (e) => {
    e.preventDefault();

    const ref = collection(app, "about");

    await addDoc(ref, {
      heading: FAQ.heading,
      text: FAQ.text,
    });

    setFAQ({
      heading: "",
      text: "",
    });
  };
  return (
    <form onSubmit={addDocsHandler}>
      <label htmlFor="heading">Question</label>
      <input
        type="text"
        id="heading"
        name="heading"
        value={FAQ.heading}
        onChange={onChangeHandler}
      />
      <label htmlFor="text">Answer</label>
      <input
        type="text"
        id="text"
        name="text"
        value={FAQ.text}
        onChange={onChangeHandler}
      />

      <button>Save</button>
    </form>
  );
}

export default EditFAQ;
