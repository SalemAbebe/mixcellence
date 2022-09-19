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

export const addFirebaseHandler = (heading, subHeading, photo) => {
  return async (dispatch) => {
    //connect to firestore database
    const collectionRef = collection(app, "hero-image");

    //send form and image to database
    await addDoc(collectionRef, {
      heading: heading,
      subHeading: subHeading,
      photo: photo,
    });

    dispatch(heroActions.handleGotId(true));
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
    });

    dispatch(heroActions.handleGotId(true));
  };
};
