import React, { useState, useEffect } from "react";
import "./EditFAQForm.scss";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  addFirebaseHandler,
  getFirebaseDataHandler,
  updateFirebaseHandler,
} from "../../../../ReduxStore/thunks/FAQ/FAQDatabaseThunks.js";

const EditFAQForm = () => {
  const dispatch = useDispatch();
  const [formInfo, setFormInfo] = useState({
    question: "",
    answer: "",
    question1: "",
    answer1: "",
  });

  const dataId = useSelector((state) => state.FAQ.dataId);
  const dataId1 = useSelector((state) => state.FAQ.dataId1);

  // form submit handler function
  const submitFormHandler = (e) => {
    e.preventDefault();
    //checks to see if there is  FAQ collection

    if (dataId === null && dataId1 === null) {
      // if it does not exist create one
      dispatch(
        addFirebaseHandler(
          formInfo.question,
          formInfo.answer,
          formInfo.question1,
          formInfo.answer1
        )
      );
    }
    //  if it exists-update the data
    else {
      dispatch(
        updateFirebaseHandler(
          dataId1,
          formInfo.question,
          formInfo.answer,
          dataId1,
          formInfo.question1,
          formInfo.answer1
        )
      );
    }
  };

  // update state from input data
  const onChangeHandler = (e) => {
    setFormInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  useEffect(() => {
    // gets realtime snapshots of firebase database

    dispatch(getFirebaseDataHandler(setFormInfo));
  }, [dispatch]);

  return (
    <form className="editFQA-form" onSubmit={submitFormHandler}>
      <div className="editFAQ">
        <input
          type="text"
          name="question"
          id="question"
          value={formInfo.question}
          onChange={onChangeHandler}
          placeholder="Question"
        />
        <br />
        <br />
        <textarea
          name="answer"
          id=""
          cols="30"
          rows="3"
          placeholder="Answer"
        ></textarea>
      </div>
      <div className="editFAQ">
        <input type="text" />
        <br />
        <br />

        <textarea name="" id="" cols="30" rows="3"></textarea>
      </div>
      <div className="editFAQ">
        <input type="text" /> <br />
        <br />
        <textarea name="" id="" cols="30" rows="3"></textarea>
      </div>
      <div className="editFAQ">
        <input type="text" /> <br />
        <br />
        <textarea name="" id="" cols="30" rows="3"></textarea>
      </div>
      <div>
        <button className="button-add">+</button>
        <p>Add a question</p>
      </div>
      <div className="button1">
        <button className="btn-save" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditFAQForm;
