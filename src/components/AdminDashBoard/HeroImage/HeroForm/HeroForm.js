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
  const gotId = useSelector((state) => state.hero.backEnd.gotId);
  const heroInfo = useSelector((state) => state.hero.backEnd.heroInfo);
  const imageURL = useSelector((state) => state.hero.backEnd.imageURL);
  const heading = useRef();
  const subHeading = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    //checks to see if there is a collection
    //if collection doesn't exist creates one
    //else updates the collection
    if (!heroInfo.id) {
      dispatch(
        addFirebaseHandler(
          heading.current.value,
          subHeading.current.value,
          heroInfo.photo
        )
      );
    } else {
      dispatch(
        updateFirebaseHandler(
          heroInfo,
          heading.current.value,
          subHeading.current.value,
          heroInfo.photo
        )
      );
    }
  };

  const onChangeHandler = (e) => {
    dispatch(
      heroActions.handleHeroInfo({
        heading: heading.current.value,
        subHeading: subHeading.current.value,
      })
    );
  };

  useEffect(() => {
    //gets realtime snapshots of database
    if (gotId) {
      dispatch(getFiresbaseDataHandler());
    }
    dispatch(heroActions.handleGotId(false));
  }, [dispatch, gotId]);

  return (
    <form onSubmit={submitFormHandler}>
      <div className="hero-form-control">
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="hero-heading"
          ref={heading}
          value={heroInfo.heading}
          onChange={onChangeHandler}
        />
      </div>
      <div className="hero-form-control">
        <label htmlFor="sub-heading">Sub-Heading</label>
        <input
          type="text"
          id="hero-sub-heading"
          ref={subHeading}
          value={heroInfo.subHeading}
          onChange={onChangeHandler}
        />
      </div>
      <button className="hero-form-button">Save</button>
    </form>
  );
}

export default HeroForm;
