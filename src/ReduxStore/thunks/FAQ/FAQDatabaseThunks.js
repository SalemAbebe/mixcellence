import { app } from "../../../firebase/config";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

// redux

import { FAQActions } from "../../slices/FAQSlice";
import { notificationActions } from "../../slices/NotificationSlice";

export const addFirebaseHandler = (question, answer) => {
  return async (dispatch) => {
    // connect to firebase
    const firebaseRef = collection(app, "FAQ");
    // send data to new collection
    await addDoc(firebaseRef, {
      question: question,
      answer: answer,
    })
      .then(() => {
        dispatch(
          notificationActions.handleSuccess({
            isSuccess: true,
            message: "FAQ collection created successfully!",
          })
        );
      })
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "there was an error creating FAQ collection!",
          })
        );
      });
  };
};

// get data from firebase

export const getFirebaseDataHandler = (setData) => {
  return (dispatch) => {
    // connect to firebase database

    const firebaseRef = collection(app, "FAQ");

    //   snapshot data from firebase

    onSnapshot(firebaseRef, (res) => {
      let arr = [];
      res.docs.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      // sort data based on order number ascending order
      arr.sort((a, b) => {
        return a.order - b.order;
      });
      console.log(arr);
      setData({
        question: arr[0].question,
        answer: arr[0].answer,
      });
      dispatch(
        FAQActions.FAQInfo({
          id: arr[0].id,
          question: arr[0].question,
          answer: arr[0].answer,
        })
      );
    });
  };
};

// update data on firebase

export const updateFirebaseHandler = (id, question, answer) => {
  return async (dispatch) => {
    // connect to firebase
    const firebaseRef = doc(app, "FAQ", id);

    //   update data on firebase
    await updateDoc(firebaseRef, {
      question: question,
      answer: answer,
    })
      .then(() => {
        dispatch(
          notificationActions.handleSuccess({
            isSuccess: true,
            message: "FAQ collection updated successfully!",
          })
        );
      })
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "there was an error updating FAQ collection!",
          })
        );
      });
  };
};
