import { app } from "../../../firebase/config";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

// redux

import { contactActions } from "../../slices/ContactSlice";
import { notificationActions } from "../../slices/NotificationSlice";

export const addFirebaseHandler = (contactHeading) => {
  return async (dispatch) => {
    // connect to firebase
    const firebaseRef = collection(app, "contact");
    // send data to new collection
    await addDoc(firebaseRef, {
      contactHeading: contactHeading,
    })
      .then(() => {
        dispatch(
          notificationActions.handleSuccess({
            isSuccess: true,
            message: "contact collection created successfully!",
          })
        );
      })
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "there was an error creating contact collection!",
          })
        );
      });
  };
};

// get data from firebase

export const getFirebaseDataHandler = (setData) => {
  return (dispatch) => {
    // connect to firebase database

    const firebaseRef = collection(app, "contact");

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
        contactHeading: arr[0].contactHeading,
      });
      dispatch(
        contactActions.contactInfo({
          id: arr[0].id,
          contactHeading: arr[0].contactHeading,
        })
      );
    });
  };
};

// update data on firebase

export const updateFirebaseHandler = (id, contactHeading) => {
  return async (dispatch) => {
    // connect to firebase
    const firebaseRef = doc(app, "contact", id);

    //   update data on firebase
    await updateDoc(firebaseRef, {
      contactHeading: contactHeading,
    })
      .then(() => {
        dispatch(
          notificationActions.handleSuccess({
            isSuccess: true,
            message: "Contact collection updated successfully!",
          })
        );
      })
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "there was an error updating contact collection!",
          })
        );
      });
  };
};
