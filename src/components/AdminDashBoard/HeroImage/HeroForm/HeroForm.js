import React, { useEffect, useRef } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { heroActions } from "../../../../ReduxStore/slices/HeroSlice";
import {
  addFirebaseHandler,
  getFiresbaseDataHandler,
  updateFirebaseHandler,
} from "../../../../ReduxStore/thunks/Hero/HeroDatabaseThunks";

//styles
import "./HeroForm.scss";

function HeroForm() {
  const dispatch = useDispatch();
  const formInfo = useSelector((state) => state.hero.backEnd.formInfo);
  const gotId = useSelector((state) => state.hero.backEnd.gotId);
  const databaseInfo = useSelector((state) => state.hero.backEnd.databaseInfo);
  const imageURL = useSelector((state) => state.hero.backEnd.imageURL);
  const heading = useRef();
  const subHeading = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    //checks to see if there is a collection
    //if collection doesn't exist creates one
    //else updates the collection
    if (!databaseInfo.id) {
      dispatch(
        addFirebaseHandler(formInfo.heading, formInfo.subHeading, imageURL)
      );
    } else {
      dispatch(
        updateFirebaseHandler(
          databaseInfo.id,
          formInfo.heading,
          formInfo.subHeading,
          imageURL
        )
      );
    }
  };

  const onChangeHandler = (e) => {
    dispatch(
      heroActions.handleFormInfo({
        heading: heading.current.value,
        subHeading: subHeading.current.value,
      })
    );
  };

  useEffect(() => {
    //gets realtime snapshots of database
    dispatch(getFiresbaseDataHandler());
    heading.current.value = databaseInfo.heading;
    subHeading.current.value = databaseInfo.subHeading;
    dispatch(heroActions.handleImageURL(databaseInfo.photo));
  }, [dispatch, gotId, databaseInfo]);

  return (
    <form onSubmit={submitFormHandler}>
      <div className="hero-form-control">
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="hero-heading"
          ref={heading}
          onChange={onChangeHandler}
        />
      </div>
      <div className="hero-form-control">
        <label htmlFor="sub-heading">Sub-Heading</label>
        <input
          type="text"
          id="hero-sub-heading"
          ref={subHeading}
          onChange={onChangeHandler}
        />
      </div>
      <button className="hero-form-button">Save</button>
    </form>
  );
}

export default HeroForm;
