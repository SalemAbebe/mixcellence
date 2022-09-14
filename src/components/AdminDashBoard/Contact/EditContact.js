import React, { useState } from "react";

//firebase
import { app } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

function EditContact() {
  const [contact, setContact] = useState({
    heading: "",
    text: "",
  });

  const onChangeHandler = (e) => {
    setContact((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addDocsHandler = async (e) => {
    e.preventDefault();

    const ref = collection(app, "contact");

    await addDoc(ref, {
      heading: contact.heading,
      text: contact.text,
    });

    setContact({
      heading: "",
      text: "",
    });
  };
  return (
    <form onSubmit={addDocsHandler}>
      <label htmlFor="heading">heading</label>
      <input
        type="text"
        id="heading"
        name="heading"
        value={contact.heading}
        onChange={onChangeHandler}
      />
      {/* <label htmlFor="text">Email Address</label>
      <input
        type="text"
        id="text"
        name="text"
        value={contact.text}
        onChange={onChangeHandler}
      /> */}

      <button>Save</button>
    </form>
  );
}

export default EditContact;
