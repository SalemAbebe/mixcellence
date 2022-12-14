//firebase storage
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

//redux
import { aboutActions } from "../../slices/AboutSlice";
import { notificationActions } from "../../slices/NotificationSlice";

export const aboutStorageHandler = (data) => {
  return async (dispatch) => {
    dispatch(aboutActions.handleIsLoading(true));

    //connect to storage
    const storage = getStorage();
    const storageRef = ref(storage, "images/about/about.png");

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
    let fileURL = "";
    await getDownloadURL(storageRef)
      .then((res) => {
        fileURL = res;
        dispatch(aboutActions.handleImageURL(fileURL));
        dispatch(
          notificationActions.handleSuccess({
            isSuccess: true,
            message: "URL retrieved!",
          })
        );
      })
      .catch(() => {
        dispatch(
          notificationActions.handleError({
            isError: true,
            message: "Unable to retrieve URL!",
          })
        );
      });

    dispatch(aboutActions.handleIsLoading(false));
  };
};
