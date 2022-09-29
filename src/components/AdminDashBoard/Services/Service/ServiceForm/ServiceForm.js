import React, { useContext, useEffect, useRef } from "react";

//context
import { IndexContext } from "../Service";

//redux
import { useDispatch, useSelector } from "react-redux";
import { servicesActions } from "../../../../../ReduxStore/slices/ServicesSlice";
import {
  addFirebaseHandler,
  getFirebaseDataHandler,
  updateFirebaseHandler,
} from "../../../../../ReduxStore/thunks/Services/ServicesDatabaseThunks";

//styles
import "./ServiceForm.scss";

function ServiceForm() {
  const dispatch = useDispatch();
  const { index } = useContext(IndexContext);
  const dataId = useSelector((state) => state.services.dataId);
  const formArr = useSelector((state) => state.services.formArr);
  const imageURL = useSelector((state) => state.services.imageURL);
  const heading = useRef();
  const subHeading = useRef();
  const text = useRef();

  const onChangeHandler = (e) => {
    dispatch(
      servicesActions.handleFormArr({
        index: index,
        heading: heading.current.value,
        subHeading: subHeading.current.value,
        text: text.current.value,
        photo: imageURL[index],
      })
    );
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    //checks to see if there is a collection
    //if collection doesn't exist creates one
    //else updates the collection
    if (dataId[index] === undefined) {
      dispatch(addFirebaseHandler(formArr, index));
    }
    if (dataId[index] !== undefined) {
      dispatch(updateFirebaseHandler(dataId[index], formArr, index));
    }
  };

  useEffect(() => {
    dispatch(getFirebaseDataHandler(index));
  }, [dispatch, index]);

  return (
    <form id={index} onSubmit={onSubmitHandler}>
      <div className="services-form-control">
        <label htmlFor="heading">Heading</label>
        <input
          id="heading"
          ref={heading}
          type="text"
          value={formArr[index]?.heading || ""}
          onChange={onChangeHandler}
        />
      </div>
      <div className="services-form-control">
        <label htmlFor="subHeading">Sub-Heading</label>
        <input
          id="subHeading"
          ref={subHeading}
          type="text"
          value={formArr[index]?.subHeading || ""}
          onChange={onChangeHandler}
        />
      </div>
      <div className="services-form-control">
        <label htmlFor="text">Text</label>
        <textarea
          id="text"
          cols="30"
          rows="10"
          ref={text}
          value={formArr[index]?.text || ""}
          onChange={onChangeHandler}
        />
      </div>
    </form>
  );
}

export default ServiceForm;
