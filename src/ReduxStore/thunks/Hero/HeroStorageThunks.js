//firebase
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { heroActions } from "../../slices/HeroSlice";
import { notificationActions } from "../../slices/NotificationSlice";

export const heroStorageHandler = (data) => {
  return async (dispatch) => {
    dispatch(heroActions.handleIsLoading(true));

    //connect to storage
    const storage = getStorage();
    const storageRef = ref(storage, `images/hero/hero.png`);

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
        dispatch(heroActions.handleImageURL(fileURL));
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

    dispatch(heroActions.handleIsLoading(false));
  };
};
