import React, { useState, useRef } from "react";
import "./EditTestimonial.scss";
// firebase
import { app } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function EditTestimonial() {
  const heading = useRef();
  const name = useRef();
  const text = useRef();
  const cityAndDate = useRef();
  const name2 = useRef();
  const text2 = useRef();
  const cityAndDate2 = useRef();
  const name3 = useRef();
  const text3 = useRef();
  const cityAndDate3 = useRef();
  const addDocsHandler = async (e) => {
    e.preventDefault();
    const firestoreRef = collection(app, "testimonial");
    await addDoc(firestoreRef, {
      heading: heading.current.value,
    });
    await addDoc(firestoreRef, {
      name: name.current.value,
      text: text.current.value,
      cityAndDate: cityAndDate.current.value,
    });
    await addDoc(firestoreRef, {
      name: name2.current.value,
      text: text2.current.value,
      cityAndDate: cityAndDate2.current.value,
    });
    await addDoc(firestoreRef, {
      name: name3.current.value,
      text: text3.current.value,
      cityAndDate: cityAndDate3.current.value,
    });
  };

  return (
    <div className="testimonial-section">
      <h1>Testimonial</h1>
      <form onSubmit={addDocsHandler}>
        <div className="heading">
          <label htmlFor="heading"> Heading</label>
          <br />
          <input
            type="text"
            name=""
            id="heading"
            ref={heading}
            placeholder="What some have to say"
          />
        </div>
        <div className="testimonial-wrapper">
          <div className="testimonial">
            <input type="text" id="name" ref={name} placeholder="name" />
            <textarea
              type="text"
              id="testimonial"
              ref={text}
              placeholder="testimonial"
            />
            <input
              type="text"
              id="cityAndDate"
              ref={cityAndDate}
              placeholder="city and date"
            />
          </div>{" "}
          <div className="testimonial">
            <input type="text" id="name" ref={name2} placeholder="name" />
            <textarea
              type="text"
              id="testimonial"
              ref={text2}
              placeholder="testimonial"
            />
            <input
              type="text"
              id="cityAndDate"
              ref={cityAndDate2}
              placeholder="city and date"
            />
          </div>{" "}
          <div className="testimonial">
            <input type="text" id="name" ref={name3} placeholder="name" />
            <textarea
              type="text"
              id="testimonial"
              ref={text3}
              placeholder="testimonial"
            />
            <input
              type="text"
              id="cityAndDate"
              ref={cityAndDate3}
              placeholder="city and date"
            />
          </div>{" "}
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}

export default EditTestimonial;
