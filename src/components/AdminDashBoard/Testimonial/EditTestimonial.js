import React, { useState, useRef } from "react";
import "./testimonial.scss";
// firebase
import { app } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

function EditTestimonial() {
  const heading = useRef();
  const name = useRef();
  const text = useRef();
  const cityAndDate = useRef();

  const addDocsHandler = async (e) => {
    e.preventDefault();
    const firestoreRef = collection(app, "testimonial");
    await addDoc(firestoreRef, {
      heading: heading.current.value,
      name: name.current.value,
      text: text.current.value,
      cityAndDate: cityAndDate.current.value,
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
            <input type="text" id="name" ref={heading} placeholder="name" />
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
          {/* <div className="testimonial">
            <input type="text" id="name" ref={heading} placeholder="name" />
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
            <input type="text" id="name" ref={heading} placeholder="name" />
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
          </div>{" "} */}
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}

export default EditTestimonial;
