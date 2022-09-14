import React, { useState } from "react";
//firebase
import { app } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

function EditTestimonial() {
  const [testimonial, setTestimonial] = useState({
    heading: "",
    text: "",
    cityAndDate: "",
  });
  const onChangeHandler = (e) => {
    setTestimonial((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const addDocsHandler = async (e) => {
    e.preventDefault();
    const ref = collection(app, "testimonials");
    await addDoc(ref, {
      heading: testimonial.heading,
      name: testimonial.name,
      text: testimonial.text,
      cityAndDate: testimonial.cityAndDate,
    });
    setTestimonial({
      heading: "",
      name: "",
      text: "",
      cityAndDate: "",
    });
  };
  return (
    <>
      <form onSubmit={addDocsHandler}>
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="heading"
          name="heading"
          value={testimonial.heading}
          onChange={onChangeHandler}
        />
      </form>
      <form onSubmit={addDocsHandler}>
        <label htmlFor="text">Name</label>
        <input
          type="text"
          id="text"
          name="text"
          value={testimonial.text}
          onChange={onChangeHandler}
        />
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          name="text"
          value={testimonial.text}
          onChange={onChangeHandler}
        />

        <label htmlFor="cityAndDate">City and Date</label>
        <input
          type="text"
          id="cityAndDate"
          name="cityAndDate"
          value={testimonial.cityAndDate}
          onChange={onChangeHandler}
        />
        <button>Save</button>
      </form>
    </>
  );
}

export default EditTestimonial;
