//firestore database
import { app } from "../../../firebase/config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

//redux
import { notificationActions } from "../../slices/NotificationSlice";
import { servicesActions } from "../../slices/ServicesSlice";

export const addFirebaseHandler = (form, index) => {
  return async (dispatch) => {
    //connect to firestore database
    const collectionRef = collection(app, "services");

    //create new collection and add doc
    await addDoc(collectionRef, {
      index: index,
      heading: form[index].heading,
      subHeading: form[index].subHeading,
      text: form[index].text,
      photo: form[index].photo,
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

export const deleteFirebaseHandler = (id) => {
  return async (dispatch) => {
    //connect to firestore database
    const docRef = doc(app, "services", id);

    //delete doc
    await deleteDoc(docRef)
      .then(() => {
        dispatch(
          notificationActions.handleSuccess({
            isSuccess: true,
            message: "Deleted document successfully!",
          })
        );
      })
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "Error deleting document!",
          })
        );
      });
  };
};

export const getFirebaseDataHandler = (i) => {
  return (dispatch) => {
    //connect to firestore database
    const collectionRef = collection(app, "services");

    //get firebase data snapshot
    onSnapshot(collectionRef, (res) => {
      if (res.empty) {
        return;
      }
      let arr = [];
      res.docs.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });

      dispatch(
        servicesActions.handleFormArr({
          index: i,
          heading: arr[i]?.heading,
          subHeading: arr[i]?.subHeading,
          text: arr[i]?.text,
          photo: arr[i]?.photo,
        })
      );

      dispatch(
        servicesActions.handleImageURL({
          index: i,
          photo: arr[i].photo,
        })
      );

      dispatch(
        servicesActions.handleServicesInfo({
          id: arr[i]?.id,
          index: arr[i]?.index,
          heading: arr[i]?.heading,
          subHeading: arr[i]?.subHeading,
          text: arr[i]?.text,
          photo: arr[i]?.photo,
        })
      );
    });
  };
};

export const updateFirebaseHandler = (id, form, index) => {
  return async (dispatch) => {
    //connect to firestore database
    const docRef = doc(app, "services", id);

    //update existing doc
    await updateDoc(docRef, {
      index: index,
      heading: form[index].heading,
      subHeading: form[index].subHeading,
      text: form[index].text,
      photo: form[index].photo,
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
