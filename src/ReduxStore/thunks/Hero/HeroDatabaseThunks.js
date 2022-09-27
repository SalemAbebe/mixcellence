//firestore database
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

    //create new collection and add doc
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

export const getFirebaseDataHandler = () => {
  return (dispatch) => {
    //connect to firestore database
    const collectionRef = collection(app, "hero-image");

    //get firebase data snapshot
    onSnapshot(collectionRef, (res) => {
      let arr = [];
      res.docs.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });
      dispatch(
        heroActions.handleFormInfo({
          heading: arr[0].heading,
          subHeading: arr[0].subHeading,
        })
      );
      dispatch(
        heroActions.handleHeroInfo({
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

    //update existing doc
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
