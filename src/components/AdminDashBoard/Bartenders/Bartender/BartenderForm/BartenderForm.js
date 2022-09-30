import React, { useContext, useRef } from "react";

//component
import BartenderFacebook from "./BartenderFacebook";
import BartenderHeading from "./BartenderHeading";
import BartenderInstagram from "./BartenderInstagram";
import BartenderSubHeading from "./BartenderSubHeading";
import BartenderTextArea from "./BartenderTextArea";
import BartenderTwitter from "./BartenderTwitter";

//context
import { IndexContext } from "../Bartender";

//redux
import { useDispatch, useSelector } from "react-redux";
import { bartendersActions } from "../../../../../ReduxStore/slices/BartendersSlice";
import {
  addFirebaseHandler,
  getFirebaseDataHandler,
  updateFirebaseHandler,
} from "../../../../../ReduxStore/thunks/Bartenders/BartendersDatabaseThunks";

//styles
import "./BartenderForm.scss";
import { useEffect } from "react";

function BartenderForm() {
  const dispatch = useDispatch();
  const { index } = useContext(IndexContext);
  const dataId = useSelector((state) => state.bartenders.dataId);
  const formArr = useSelector((state) => state.bartenders.formArr);
  const imageURL = useSelector((state) => state.bartenders.imageURL);
  const facebook = useRef();
  const facebookSelected = useRef();
  const heading = useRef();
  const instagram = useRef();
  const instagramSelected = useRef();
  const subHeading = useRef();
  const text = useRef();
  const twitter = useRef();
  const twitterSelected = useRef();
  console.log(dataId);

  const onChangeHandler = () => {
    dispatch(
      bartendersActions.handleFormArr({
        index: index,
        heading: heading.current.value,
        subHeading: subHeading.current.value,
        text: text.current.value,
        photo: imageURL[index],
        instagram: {
          selected: instagramSelected.current.checked,
          link: instagram.current.value,
        },
        twitter: {
          selected: twitterSelected.current.checked,
          link: twitter.current.value,
        },
        facebook: {
          selected: facebookSelected.current.checked,
          link: facebook.current.value,
        },
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
  }, [index, dispatch]);

  return (
    <form className="bartender-form" id={index} onSubmit={onSubmitHandler}>
      <BartenderHeading heading={heading} onChangeHandler={onChangeHandler} />
      <BartenderSubHeading
        onChangeHandler={onChangeHandler}
        subHeading={subHeading}
      />
      <BartenderTextArea onChangeHandler={onChangeHandler} text={text} />
      <BartenderInstagram
        instagram={instagram}
        instagramSelected={instagramSelected}
        onChangeHandler={onChangeHandler}
      />
      <BartenderTwitter
        onChangeHandler={onChangeHandler}
        twitter={twitter}
        twitterSelected={twitterSelected}
      />
      <BartenderFacebook
        facebook={facebook}
        facebookSelected={facebookSelected}
        onChangeHandler={onChangeHandler}
      />
    </form>
  );
}

export default BartenderForm;
