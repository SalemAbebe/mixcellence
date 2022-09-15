import React, { useEffect, useRef } from "react";

//firebase
import { app } from "../../../../firebase/config";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";

//redux
import { useDispatch, useSelector } from "react-redux";
import { heroActions } from "../../../../ReduxStore/slices/heroSlice";

//styles
import "./HeroForm.css";

function HeroForm() {
  const dispatch = useDispatch();
  const gotId = useSelector((state) => state.hero.backEnd.gotId);
  const hero = useSelector((state) => state.hero.backEnd.heroInfo);
  const id = useSelector((state) => state.hero.backEnd.id);
  const heading = useRef();
  const subHeading = useRef();

  const onChangeHandler = (e) => {
    dispatch(
      heroActions.backEndInfo({
        heading: heading.current.value,
        subHeading: subHeading.current.value,
      })
    );
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (id === "") {
      //connect to firestore database
      const firestoreRef = collection(app, "hero-image");

      //send form and image to database
      await addDoc(firestoreRef, {
        heading: hero.heading,
        subHeading: hero.subHeading,
      });
      dispatch(heroActions.handleGotId(true));
    } else {
      //connect to firestore database
      const docRef = doc(app, "hero-image", id);

      //update doc on firestore database
      await updateDoc(docRef, {
        heading: hero.heading,
        subHeading: hero.subHeading,
      });
      dispatch(heroActions.handleGotId(true));
    }

    //clear form
    heading.current.value = "";
    subHeading.current.value = "";
  };

  useEffect(() => {
    if (gotId) {
      //connect to firestore database
      const firestoreRef = collection(app, "hero-image");
      onSnapshot(firestoreRef, (res) => {
        dispatch(heroActions.handleId(res.docs[0].id));
      });
    }
    dispatch(heroActions.handleGotId(false));
  }, [dispatch, gotId]);

  return (
    <form onSubmit={submitFormHandler}>
      <div className="form-control">
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="heading"
          ref={heading}
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-control">
        <label htmlFor="sub-heading">Sub-Heading</label>
        <input
          type="text"
          id="sub-heading"
          ref={subHeading}
          onChange={onChangeHandler}
        />
      </div>
      <button className="form-button">Save</button>
    </form>
  );
}

export default HeroForm;
