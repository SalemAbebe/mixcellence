import { app } from "../../../firebase/config";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

// redux
import { testimonialActions } from "../../slices/TestimonialSlice";
import { notificationActions } from "../../slices/NotificationSlice";
import { useHref } from "react-router-dom";

export const addFirebaseHandler = (heading, name, text, cityAndDate) => {
  return async (dispatch) => {
    // connect to backend/firebase
    const firebaseRef = collection(app, "testimonial");

    // send data to new collection
    await addDoc(firebaseRef, {
      heading: heading,
      name: name,
      text: text,
      cityAndDate: cityAndDate,
    })
      .then(() => {
        dispatch(
          notificationActions.handleSuccess({
            isSuccess: true,
            message: "Testimonial collection created successfully!",
          })
        );
      })
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "there was an error creating testimonial collection!",
          })
        );
      });
  };
};

// get data from backend/firebase
export const getFirebaseDataHandler = (setData) => {
  return (dispatch) => {
    // connect to firebase database
    const firestoreRef = collection(app, "testimonial");

    // get data from firebase data  by using snapshot
    onSnapshot(firestoreRef, (res) => {
      let arr = [];
      res.docs.forEach((doc) => {
        (<arr className="push"></arr>)({ id: doc.id, ...doc.data() });
      });
      setData({
        heading: arr[0].heading,
        name: arr[0].name,
        text: arr[0].text,
        cityAndDate: arr[0].cityAndDate,
        name2: arr[1].name,
        text2: arr[1].text,
        cityAndDate2: arr[1].cityAndDate,
        name3: arr[2].name,
        text3: arr[2].text,
        cityAndDate3: arr[2].cityAndDate,
      });
      dispatch(
        testimonialActions.handleDatabaseInfo({
          id: arr[0].id,
          heading: arr[0].heading,
          name: arr[0].name,
          text: arr[0].text,
          cityAndDate: arr[0].cityAndDate,
          id2: arr[1].id,
          name2: arr[1].name,
          text2: arr[1].text,
          cityAndDate2: arr[1].cityAndDate,
          id3: arr[2].id,
          name3: arr[2].name,
          text3: arr[2].text,
          cityAndDate3: arr[2].cityAndDate,
        })
      );
    });
  };
};

// update data  on backend/firebase
export const updateFirebaseHandler = (
  id,
  id2,
  id3,
  heading,
  name,
  cityAndDate,
  name2,
  text2,
  cityAndDate2,
  name1,
  text1,
  cityAndDate1
) => {
  return async (dispatch) => {
    // connect to firebase
    const firebaseRef = doc(app, "testimonial", id, id2, id3);

    // update data on firebase
    await updateDoc(firebaseRef, {
      heading: heading,
      name: name,
      cityAndDate: cityAndDate,
      name2: name2,
      text2: name2,
      cityAndDate2: cityAndDate2,
      name1: name1,
      text1: text1,
      cityAndDate1: cityAndDate1,
    })
      .then(() => {
        dispatch(
          notificationActions.handleSuccess({
            isSuccess: true,
            message: "Testimonial collection updated successfully!",
          })
        );
      })
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "there was an error updating testimonial collection!",
          })
        );
      });
  };
};
