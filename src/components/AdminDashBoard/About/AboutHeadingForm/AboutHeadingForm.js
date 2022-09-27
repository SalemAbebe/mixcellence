import React, { useEffect, useRef } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { aboutActions } from "../../../../ReduxStore/slices/AboutSlice";
import {
  addFirebaseHandler,
  getFirebaseDataHandler,
  updateFirebaseHandler,
} from "../../../../ReduxStore/thunks/About/AboutDatabaseThunks";

//styles
import "./AboutHeadingForm.scss";

function AboutHeadingForm() {
  const dispatch = useDispatch();
  const dataId = useSelector((state) => state.about.dataId);
  const formInfo = useSelector((state) => state.about.formInfo);
  const imageURL = useSelector((state) => state.about.imageURL);
  const heading = useRef();
  const text = useRef();

  const onChangeHandler = (e) => {
    dispatch(
      aboutActions.handleFormInfo({
        heading: heading.current.value,
        text: text.current.value,
      })
    );
  };

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

  useEffect(() => {
    //gets realtime snapshots of database
    const unSub = dispatch(getFirebaseDataHandler());

    return () => unSub;
  }, [dispatch]);

  return (
    <form id="about-form" onSubmit={submitFormHandler}>
      <div className="about-heading-control">
        <label htmlFor="heading">Heading</label>
        <input
          id="heading"
          ref={heading}
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
          ref={text}
          value={formInfo.text}
          onChange={onChangeHandler}
        ></textarea>
      </div>
    </form>
  );
}

export default AboutHeadingForm;
