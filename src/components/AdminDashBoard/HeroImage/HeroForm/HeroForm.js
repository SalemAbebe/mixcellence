import React, { useEffect, useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  addFirebaseHandler,
  getFirebaseDataHandler,
  updateFirebaseHandler,
} from "../../../../ReduxStore/thunks/Hero/HeroDatabaseThunks";

//styles
import "./HeroForm.scss";

function HeroForm() {
  const dispatch = useDispatch();
  const [formInfo, setFormInfo] = useState({
    heading: "",
    subHeading: "",
  });
  const dataId = useSelector((state) => state.hero.dataId);
  const imageURL = useSelector((state) => state.hero.imageURL);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    //checks to see if there is a collection
    //if collection doesn't exist creates one
    //else updates the collection
    if (dataId === null) {
      dispatch(
        addFirebaseHandler(formInfo.heading, formInfo.subHeading, imageURL)
      );
    } else {
      dispatch(
        updateFirebaseHandler(
          dataId,
          formInfo.heading,
          formInfo.subHeading,
          imageURL
        )
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
      <div className="hero-form-control">
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="hero-heading"
          name="heading"
          value={formInfo.heading}
          onChange={onChangeHandler}
        />
      </div>
      <div className="hero-form-control">
        <label htmlFor="sub-heading">Sub-Heading</label>
        <input
          type="text"
          id="hero-sub-heading"
          name="subHeading"
          value={formInfo.subHeading}
          onChange={onChangeHandler}
        />
      </div>
      <button className="hero-form-button">Save</button>
    </form>
  );
}

export default HeroForm;
