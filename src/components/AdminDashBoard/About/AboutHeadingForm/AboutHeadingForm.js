import React, { useEffect, useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  addFirebaseHandler,
  getFirebaseDataHandler,
  updateFirebaseHandler,
} from "../../../../ReduxStore/thunks/About/AboutDatabaseThunks";

//styles
import "./AboutHeadingForm.scss";

function AboutHeadingForm() {
  const dispatch = useDispatch();
  const [formInfo, setFormInfo] = useState({
    heading: "",
    text: "",
  });
  const dataId = useSelector((state) => state.about.dataId);
  const imageURL = useSelector((state) => state.about.imageURL);

  const submitFormHandler = (e) => {
    e.preventDefault();

    //checks to see if there is a collection
    //if collection doesn't exist creates one
    //else updates the collection
    if (dataId === null) {
      dispatch(addFirebaseHandler(formInfo.heading, formInfo.text, imageURL));
    } else {
      dispatch(
        updateFirebaseHandler(dataId, formInfo.heading, formInfo.text, imageURL)
      );
    }
  };

  const onChangeHandler = (e) => {
    setFormInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    //gets realtime snapshots of database
    dispatch(getFirebaseDataHandler(setFormInfo));
  }, [dispatch]);

  return (
    <form onSubmit={submitFormHandler}>
      <div className="about-heading-control">
        <label htmlFor="heading">Heading</label>
        <input
          id="heading"
          name="heading"
          type="text"
          value={formInfo.heading}
          onChange={onChangeHandler}
        />
      </div>
      <div className="about-text-control">
        <label htmlFor="text">Text</label>
        <textarea
          id="text"
          cols="30"
          rows="10"
          name="text"
          value={formInfo.text}
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <button className="about-heading-button">Save</button>
    </form>
  );
}

export default AboutHeadingForm;
