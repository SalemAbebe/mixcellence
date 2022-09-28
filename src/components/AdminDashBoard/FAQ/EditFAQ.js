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
    <div className="editFAQ">
      <h1>FAQ</h1>
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
        <textarea
          type="text"
          name="text"
          id="text"
          cols="30"
          rows="10"
          value={FAQ.text}
          onChange={onChangeHandler}
        />

        <button>Save</button>
      </form>
    </div>
  );
}

export default EditFAQ;
