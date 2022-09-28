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
// import { useHref } from "react-router-dom";

export const addFirebaseHandler = (
  heading,
  name,
  text,
  cityAndDate,
  name1,
  text1,
  cityAndDate1,
  name2,
  text2,
  cityAndDate2
) => {
  return async (dispatch) => {
    // connect to backend/firebase
    const firebaseRef = collection(app, "testimonial");

    // send data to new collection
    await addDoc(firebaseRef, {
      heading: heading,
      name: name,
      text: text,
      cityAndDate: cityAndDate,
      order: 0,
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
    await addDoc(firebaseRef, {
      name: name1,
      text: text1,
      cityAndDate: cityAndDate1,
      order: 1,
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
    await addDoc(firebaseRef, {
      name: name2,
      text: text2,
      cityAndDate: cityAndDate2,
      order: 2,
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
        arr.push({ id: doc.id, ...doc.data() });
      });
      arr.sort((a, b) => {
        return a.order - b.order;
      });

      console.log(arr);
      setData({
        heading: arr[0].heading,
        name: arr[0].name,
        text: arr[0].text,
        cityAndDate: arr[0].cityAndDate,
        name1: arr[1].name,
        text1: arr[1].text,
        cityAndDate1: arr[1].cityAndDate,
        name2: arr[2].name,
        text2: arr[2].text,
        cityAndDate2: arr[2].cityAndDate,
      });
      dispatch(
        testimonialActions.testimonialInfo({
          id: arr[0].id,
          heading: arr[0].heading,
          name: arr[0].name,
          text: arr[0].text,
          cityAndDate: arr[0].cityAndDate,
          id1: arr[1].id,
          name1: arr[1].name,
          text1: arr[1].text,
          cityAndDate2: arr[1].cityAndDate,
          id2: arr[2].id,
          name2: arr[2].name,
          text2: arr[2].text,
          cityAndDate2: arr[2].cityAndDate,
        })
      );
    });
  };
};

// update data  on backend/firebase
export const updateFirebaseHandler = (
  id,
  heading,
  name,
  text,
  cityAndDate,
  id1,
  name1,
  text1,
  cityAndDate1,
  id2,
  name2,
  text2,
  cityAndDate2
) => {
  return async (dispatch) => {
    // connect to firebase
    const firebaseRef = doc(app, "testimonial", id);

    // update data on firebase
    await updateDoc(firebaseRef, {
      heading: heading,
      name: name,
      text: text,
      cityAndDate: cityAndDate,
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
    // connect to firebase
    const firebaseRef1 = doc(app, "testimonial", id1);

    // update data on firebase
    await updateDoc(firebaseRef1, {
      name: name1,
      text: text1,
      cityAndDate: cityAndDate1,
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
    // connect to firebase
    const firebaseRef2 = doc(app, "testimonial", id2);

    // update data on firebase
    await updateDoc(firebaseRef2, {
      name: name2,
      text: text2,
      cityAndDate: cityAndDate2,
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
