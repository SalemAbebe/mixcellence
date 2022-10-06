import React, { useState, useEffect } from "react";
import "./EditContact.scss";
// redux

import { useDispatch, useSelector } from "react-redux";
import {
  addFirebaseHandler,
  getFirebaseDataHandler,
  updateFirebaseHandler,
} from "../../../ReduxStore/thunks/Contact/ContactDatabaseThunks.js";

function EditContact() {
  const dispatch = useDispatch();
  const [formInfo, setFormInfo] = useState({
    contactHeading: "",
  });
  const dataId = useSelector((state) => state.contact.dataId);

  const onChangeHandler = (e) => {
    setFormInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  useEffect(() => {
    // gets realtime snapshots of firebase database

    dispatch(getFirebaseDataHandler(setFormInfo));
  }, [dispatch]);

  // form submit handler function
  const submitFormHandler = (e) => {
    e.preventDefault();
    //checks to see if there is  contact collection

    if (dataId === null) {
      // if it does not exist create one
      dispatch(addFirebaseHandler(formInfo.contactHeading));
    }
    //  if it exists-update the data
    else {
      dispatch(updateFirebaseHandler(dataId, formInfo.contactHeading));
    }
  };

  return (
    <div className="contact-section">
      <h1>Contact</h1>
      <form className="edit-contact-form" onSubmit={submitFormHandler}>
        <label htmlFor="heading">heading</label>
        <br />
        <input
          type="text"
          id="heading"
          name="heading"
          value={formInfo?.contactHeading}
          onChange={onChangeHandler}
          placeholder="let's mix it up!"
        />
        <div className="button">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default EditContact;
