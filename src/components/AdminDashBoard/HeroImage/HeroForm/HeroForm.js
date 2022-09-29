import React, { useEffect, useRef } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { heroActions } from "../../../../ReduxStore/slices/HeroSlice";
import {
  addFirebaseHandler,
  getFirebaseDataHandler,
  updateFirebaseHandler,
} from "../../../../ReduxStore/thunks/Hero/HeroDatabaseThunks";

//styles
import "./HeroForm.scss";

function HeroForm() {
  const dispatch = useDispatch();
  const dataId = useSelector((state) => state.hero.dataId);
  const formInfo = useSelector((state) => state.hero.formInfo);
  const imageURL = useSelector((state) => state.hero.imageURL);
  const heading = useRef();
  const subHeading = useRef();

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
    dispatch(
      heroActions.handleFormInfo({
        heading: heading.current.value,
        subHeading: subHeading.current.value,
      })
    );
  };

  useEffect(() => {
    //gets realtime snapshots of database
    const unSub = dispatch(getFirebaseDataHandler());

    return () => unSub;
  }, [dispatch]);

  return (
    <form className="hero-form" onSubmit={submitFormHandler}>
      <div className="hero-form-control">
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="hero-heading"
          ref={heading}
          value={formInfo.heading}
          onChange={onChangeHandler}
        />
      </div>
      <div className="hero-form-control">
        <label htmlFor="sub-heading">Sub-Heading</label>
        <input
          type="text"
          id="hero-sub-heading"
          ref={subHeading}
          value={formInfo.subHeading}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
}

export default HeroForm;
