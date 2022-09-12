import React, { useState } from "react";
import { app } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

function EditEvents() {
  const [events, setEvents] = useState({
    photo1: "",
    photo2: "",
    photo3: "",
    photo4: "",
    photo5: "",
  });

  const onChangeHandler = (e) => {
    setEvents((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addDocHandler = async (e) => {
    e.preventDefault();
    const ref = collection(app, "events");
    await addDoc(ref, {
      photo1: events.photo1,
      photo2: events.photo1,
      photo3: events.photo1,
      photo4: events.photo1,
      photo5: events.photo1,
    });
  };
  return (
    <form>
      <label htmlFor="photo">Photo-1</label>
      <input
        type="text"
        id="photo"
        name="photo"
        value={events.photo1}
        onChange={onChangeHandler}
      />
      <label htmlFor="photo">Photo-2</label>
      <input
        type="text"
        id="photo"
        name="photo"
        value={events.photo2}
        onChange={onChangeHandler}
      />
      <label htmlFor="photo">Photo-3</label>
      <input
        type="text"
        id="photo"
        name="photo"
        value={events.photo3}
        onChange={onChangeHandler}
      />
      <label htmlFor="photo">Photo-4</label>
      <input
        type="text"
        id="photo"
        name="photo"
        value={events.photo4}
        onChange={onChangeHandler}
      />
      <label htmlFor="photo">Photo-5</label>
      <input
        type="text"
        id="photo"
        name="photo"
        value={events.photo5}
        onChange={onChangeHandler}
      />
      <button>Save</button>
    </form>
  );
}

export default EditEvents;
