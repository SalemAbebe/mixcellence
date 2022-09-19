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
import { heroActions } from "../../slices/HeroSlice";
import { notificationActions } from "../../slices/NotificationSlice";

export const addFirebaseHandler = (heading, subHeading, photo) => {
  return async (dispatch) => {
    //connect to firestore database
    const collectionRef = collection(app, "hero-image");

    //send form and image to database
    await addDoc(collectionRef, {
      heading: heading,
      subHeading: subHeading,
      photo: photo,
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

export const getFiresbaseDataHandler = () => {
  return (dispatch) => {
    //connect to firestore database
    const firestoreRef = collection(app, "hero-image");

    //get firebase data snapshot
    onSnapshot(firestoreRef, (res) => {
      let arr = [];
      res.docs.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      dispatch(
        heroActions.handleDatabaseInfo({
          id: arr[0].id,
          heading: arr[0].heading,
          subHeading: arr[0].subHeading,
          imageURL: arr[0].photo,
        })
      );
    });
  };
};

export const updateFirebaseHandler = (id, heading, subHeading, url) => {
  return async (dispatch) => {
    //connect to firestore database
    const docRef = doc(app, "hero-image", id);

    //update doc on firestore database
    await updateDoc(docRef, {
      heading: heading,
      subHeading: subHeading,
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
