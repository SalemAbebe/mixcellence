import React, { useState, useEffect, useRef } from "react";

// styles
import "./EditTestimonialForm.scss";

// // firebase
// import { app } from "../../../../firebase/config";
// import { collection, addDoc } from "firebase/firestore";

// const EditTestimonialForm = () => {
//   const heading = useRef();
//   const name = useRef();
//   const text = useRef();
//   const cityAndDate = useRef();
//   const name2 = useRef();
//   const text2 = useRef();
//   const cityAndDate2 = useRef();
//   const name3 = useRef();
//   const text3 = useRef();
//   const cityAndDate3 = useRef();

//   const addDocsHandler = async (e) => {
//     e.preventDefault();
//     const firestoreRef = collection(app, "testimonial");
//     // await addDoc(firestoreRef, {
//     //   heading: heading.current.value,
//     // });
//     await addDoc(firestoreRef, {
//       heading: heading.current.value,
//       name: name.current.value,
//       text: text.current.value,
//       cityAndDate: cityAndDate.current.value,
//     });
//     await addDoc(firestoreRef, {
//       name: name2.current.value,
//       text: text2.current.value,
//       cityAndDate: cityAndDate2.current.value,
//     });
//     await addDoc(firestoreRef, {
//       name: name3.current.value,
//       text: text3.current.value,
//       cityAndDate: cityAndDate3.current.value,
//     });
//   };
//   return (
//     <form onSubmit={addDocsHandler}>
//       <div className="heading">
//         <label htmlFor="heading"> Heading</label>
//         <br />
//         <input
//           type="text"
//           name=""
//           id="heading"
//           ref={heading}
//           placeholder="What some have to say"
//         />
//       </div>
//       <div className="testimonial-wrapper">
//         <div className="testimonial">
//           <input type="text" id="name" ref={name} placeholder="name" />
//           <textarea
//             type="text"
//             id="testimonial"
//             ref={text}
//             placeholder="testimonial"
//           />
//           <input
//             type="text"
//             id="cityAndDate"
//             ref={cityAndDate}
//             placeholder="city and date"
//           />
//         </div>{" "}
//         <div className="testimonial">
//           <input type="text" id="name" ref={name2} placeholder="name" />
//           <textarea
//             type="text"
//             id="testimonial"
//             ref={text2}
//             placeholder="testimonial"
//           />
//           <input
//             type="text"
//             id="cityAndDate"
//             ref={cityAndDate2}
//             placeholder="city and date"
//           />
//         </div>{" "}
//         <div className="testimonial">
//           <input type="text" id="name" ref={name3} placeholder="name" />
//           <textarea
//             type="text"
//             id="testimonial"
//             ref={text3}
//             placeholder="testimonial"
//           />
//           <input
//             type="text"
//             id="cityAndDate"
//             ref={cityAndDate3}
//             placeholder="city and date"
//           />
//         </div>{" "}
//       </div>
//       <div className="button">
//         <button>Save</button>
//       </div>
//     </form>
//   );
// };

// export default EditTestimonialForm;

// redux;

import { useDispatch, useSelector } from "react-redux";
import {
  addFirebaseHandler,
  getFirebaseDataHandler,
  updateFirebaseHandler,
} from "../../../../ReduxStore/thunks/Testimonial/TestimonialDatabaseThunks";

function EditTestimonialForm() {
  const dispatch = useDispatch();
  const [formInfo, setFormInfo] = useState({
    heading: "",
    name: "",
    text: "",
    cityAndDate: "",
    name1: "",
    text1: "",
    cityAndDate1: "",
    name2: "",
    text2: "",
    cityAndDate2: "",
  });
  const dataId = useSelector((state) => state.testimonial.dataId);
  const dataId1 = useSelector((state) => state.testimonial.dataId1);
  const dataId2 = useSelector((state) => state.testimonial.dataId2);

  const submitFormHandler = (e) => {
    e.preventDefault();

    //checks to see if there is  testimonial collection
    //if collection doesn't exist creates one
    //else updates the collection

    if (dataId === null && dataId1 === null && dataId2 === null) {
      dispatch(
        addFirebaseHandler(
          formInfo.heading,
          formInfo.name,
          formInfo.text,
          formInfo.cityAndDate,
          formInfo.name1,
          formInfo.text1,
          formInfo.cityAndDate1,
          formInfo.name2,
          formInfo.text2,
          formInfo.cityAndDate2
        )
      );
    } else {
      dispatch(
        updateFirebaseHandler(
          dataId,
          formInfo.heading,
          formInfo.name,
          formInfo.text,
          formInfo.cityAndDate,
          dataId1,
          formInfo.name1,
          formInfo.text1,
          formInfo.cityAndDate1,
          dataId2,
          formInfo.name2,
          formInfo.text2,
          formInfo.cityAndDate2
        )
      );
    }
  };
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
    <form onSubmit={submitFormHandler}>
      <div className="heading">
        <label htmlFor="heading"> Heading</label>
        <br />
        <input
          type="text"
          name="heading"
          id="heading"
          value={formInfo.heading}
          onChange={onChangeHandler}
          placeholder="What some have to say"
        />
      </div>
      <div className="testimonial-wrapper">
        <div className="testimonial">
          <input
            type="text"
            id="name"
            name="name"
            value={formInfo.name}
            onChange={onChangeHandler}
            placeholder="name"
          />
          <textarea
            type="text"
            id="testimonial"
            name="text"
            value={formInfo.text}
            onChange={onChangeHandler}
            placeholder="testimonial"
          />
          <input
            type="text"
            id="cityAndDate"
            name="cityAndDate"
            value={formInfo.cityAndDate}
            onChange={onChangeHandler}
            placeholder="city and date"
          />
        </div>{" "}
        <div className="testimonial">
          <input
            type="text"
            id="name"
            name="name1"
            value={formInfo.name1}
            onChange={onChangeHandler}
            placeholder="name"
          />
          <textarea
            type="text"
            name="text1"
            id="testimonial"
            value={formInfo.text1}
            onChange={onChangeHandler}
            placeholder="testimonial"
          />
          <input
            type="text"
            id="cityAndDate"
            name="cityAndDate1"
            value={formInfo.cityAndDate1}
            onChange={onChangeHandler}
            placeholder="city and date"
          />
        </div>{" "}
        <div className="testimonial">
          <input
            type="text"
            id="name"
            name="name2"
            value={formInfo.name2}
            onChange={onChangeHandler}
            placeholder="name"
          />
          <textarea
            type="text"
            id="testimonial"
            name="text2"
            value={formInfo.text2}
            onChange={onChangeHandler}
            placeholder="testimonial"
          />
          <input
            type="text"
            id="cityAndDate2"
            name="cityAndDate2"
            value={formInfo.cityAndDate2}
            onChange={onChangeHandler}
            placeholder="city and date"
          />
        </div>{" "}
      </div>
      <div className="button">
        <button>Save</button>
      </div>
    </form>
  );
}
export default EditTestimonialForm;
