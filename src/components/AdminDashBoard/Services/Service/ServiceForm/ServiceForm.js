import React, { useContext, useEffect, useRef } from "react";

//component
import ServiceHeadingInput from "./ServiceHeadingInput";
import ServiceSubHeadingInput from "./ServiceSubHeadingInput";
import ServiceTextArea from "./ServiceTextArea";

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
      <ServiceHeadingInput
        heading={heading}
        onChangeHandler={onChangeHandler}
      />
      <ServiceSubHeadingInput
        onChangeHandler={onChangeHandler}
        subHeading={subHeading}
      />
      <ServiceTextArea onChangeHandler={onChangeHandler} text={text} />
    </form>
  );
}

export default ServiceForm;
