//firebase storage
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";

//redux
import { notificationActions } from "../../slices/NotificationSlice";
import { servicesActions } from "../../slices/ServicesSlice";

export const deleteStorageHandler = (index) => {
  return async (dispatch) => {
    //connect to storage
    const storage = getStorage();
    const deleteRef = ref(storage, `images/services/${index}/services.png`);

    //delete file
    await deleteObject(deleteRef)
      .then(() => {})
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "Error deleting file!",
          })
        );
      });
  };
};

export const servicesStorageHandler = (data, index) => {
  return async (dispatch) => {
    dispatch(servicesActions.handleIsLoading(true));

    //connect to storage
    const storage = getStorage();
    const storageRef = ref(storage, `images/services/${index}/services.png`);

    //save file to storage
    await uploadBytes(storageRef, data)
      .then(() => {
        dispatch(
          notificationActions.handleSuccess({
            isSuccess: true,
            message: "File uploaded successfully!",
          })
        );
      })
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "Unable to load the file!",
          })
        );
      });

    //get URL for file from storage
    await getDownloadURL(storageRef).then((res) => {
      dispatch(
        servicesActions.handleImageURL({
          index: index,
          photo: res,
        })
      );
    });

    dispatch(servicesActions.handleIsLoading(false));
  };
};
