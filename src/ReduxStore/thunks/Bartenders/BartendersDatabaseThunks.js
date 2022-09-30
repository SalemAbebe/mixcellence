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
import { bartendersActions } from "../../slices/BartendersSlice";
import { notificationActions } from "../../slices/NotificationSlice";

export const addFirebaseHandler = (form, index) => {
  return async (dispatch) => {
    //connect to firestore database
    const collectionRef = collection(app, "bartenders");

    //create new collection and add doc
    await addDoc(collectionRef, {
      index: index,
      heading: form[index].heading,
      subHeading: form[index].subHeading,
      text: form[index].text,
      instagram: form[index].instagram,
      twitter: form[index].twitter,
      facebook: form[index].facebook,
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
    const docRef = doc(app, "bartenders", id);

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
    const collectionRef = collection(app, "bartenders");

    //get firebase data snapshot
    onSnapshot(collectionRef, (res) => {
      if (res.empty) {
        return;
      }

      let arr = [];
      res.docs.forEach((doc) => {
        arr.push({ id: doc.id, ...doc.data() });
      });

      console.log(arr);

      dispatch(
        bartendersActions.handleFormArr({
          index: i,
          heading: arr[i].heading,
          subHeading: arr[i].subHeading,
          text: arr[i].text,
          instagram: {
            link: arr[i].instagram.link,
            selected: arr[i].instagram.selected,
          },
          twitter: {
            link: arr[i].twitter.link,
            selected: arr[i].twitter.selected,
          },
          facebook: {
            link: arr[i].facebook.link,
            selected: arr[i].facebook.selected,
          },
          photo: arr[i].photo,
        })
      );

      dispatch(
        bartendersActions.handleImageURL({
          index: i,
          photo: arr[i].photo,
        })
      );

      dispatch(
        bartendersActions.handleBartendersInfo({
          id: arr[i].id,
          index: arr[i].index,
          heading: arr[i].heading,
          subHeading: arr[i].subHeading,
          text: arr[i].text,
          instagram: arr[i].instagram,
          twitter: arr[i].twitter,
          facebook: arr[i].facebook,
          photo: arr[i].photo,
        })
      );
    });
  };
};

export const updateFirebaseHandler = (id, form, index) => {
  return async (dispatch) => {
    //connect to firestore database
    const docRef = doc(app, "bartenders", id);

    //update existing doc
    await updateDoc(docRef, {
      index: index,
      heading: form[index].heading,
      subHeading: form[index].subHeading,
      text: form[index].text,
      instagram: form[index].instagram,
      twitter: form[index].twitter,
      facebook: form[index].facebook,
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
