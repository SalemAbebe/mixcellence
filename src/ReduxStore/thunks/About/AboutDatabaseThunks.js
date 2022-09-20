//firebase
import { app } from "../../../firebase/config";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

//redux
import { aboutActions } from "../../slices/AboutSlice";
import { notificationActions } from "../../slices/NotificationSlice";

export const addFirebaseHandler = (heading, text, url) => {
  return async (dispatch) => {
    //connect to firebase
    const firebaseRef = collection(app, "about");

    //send heading to new collection
    await addDoc(firebaseRef, {
      heading: heading,
      text: text,
      photo: url,
    })
      .then(() => {
        dispatch(
          notificationActions.handleSuccess({
            isSuccess: true,
            message: "Collection created successfully!",
          })
        );
      })
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "There was an error creating a collection!",
          })
        );
      });
  };
};

export const getFirebaseDataHandler = (setData) => {
  return (dispatch) => {
    //connect to firestore database
    const firestoreRef = collection(app, "about");

    //get firebase data snapshot
    onSnapshot(firestoreRef, (res) => {
      let arr = [];
      res.docs.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      setData({
        heading: arr[0].heading,
        text: arr[0].text,
      });
      dispatch(
        aboutActions.handleDatabaseInfo({
          id: arr[0].id,
          heading: arr[0].heading,
          text: arr[0].text,
          photo: arr[0].photo,
        })
      );
    });
  };
};

export const updateFirebaseHandler = (id, heading, text, url) => {
  return async (dispatch) => {
    //connect to firebase
    const firebaseRef = doc(app, "about", id);

    //update heading doc
    await updateDoc(firebaseRef, {
      heading: heading,
      text: text,
      photo: url,
    })
      .then(() => {
        dispatch(
          notificationActions.handleSuccess({
            isSuccess: true,
            message: "Document updated successfully!",
          })
        );
      })
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "There was an Error updating the document!",
          })
        );
      });
  };
};
