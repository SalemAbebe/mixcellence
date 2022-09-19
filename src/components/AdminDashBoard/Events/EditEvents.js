import React, { useState } from "react";
import { app } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import "./Editevents.css";

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

  const addDocsHandler = async (e) => {
    e.preventDefault();
    const ref = collection(app, "events");
    await addDoc(ref, {
      photo1: events.photo1,
      photo2: events.photo2,
      photo3: events.photo3,
      photo4: events.photo4,
      photo5: events.photo5,
    });
    setEvents({
      photo1: "",
      photo2: "",
      photo3: "",
      photo4: "",
      photo5: "",
    });
  };
  return (
    <>
      <form onSubmit={addDocsHandler}>
        <label htmlFor="photo1" className="event1">
          Photo-1
          <input
            className="custom-file-input"
            type="file"
            id="photo1"
            name="photo1"
            value={events.photo1}
            onChange={onChangeHandler}
            // hidden
          />
        </label>
      </form>
      <form onSubmit={addDocsHandler}>
        <label htmlFor="photo2">Photo-2</label>
        <input
          type="text"
          id="photo2"
          name="photo2"
          value={events.photo2}
          onChange={onChangeHandler}
        />
        <button></button>
        {/* </form> */}
        <label htmlFor="photo3">Photo-3</label>
        <input
          type="text"
          id="photo3"
          name="photo3"
          value={events.photo3}
          onChange={onChangeHandler}
        />
        <label htmlFor="photo4">Photo-4</label>
        <input
          type="text"
          id="photo4"
          name="photo4"
          value={events.photo4}
          onChange={onChangeHandler}
        />
        <label htmlFor="photo5">Photo-5</label>
        <input
          type="text"
          id="photo5"
          name="photo5"
          value={events.photo5}
          onChange={onChangeHandler}
        />
        <button>Save</button>
      </form>
    </>
  );
}

export default EditEvents;
