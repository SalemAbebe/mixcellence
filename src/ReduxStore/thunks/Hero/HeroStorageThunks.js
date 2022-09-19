//firebase
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";
import { heroActions } from "../../slices/HeroSlice";

export const heroStorageHandler = (data) => {
  return async (dispatch) => {
    dispatch(heroActions.handleIsLoading(true));
    dispatch(heroActions.handleFilePath(`images/hero/${data.name}`));

    //connect to storage
    const storage = getStorage();
    const storageRef = ref(storage, `images/hero/${data.name}`);

    //save file to storage
    await uploadBytes(storageRef, data).then((res) => {
      console.log(res);
    });

    //get URL for file from storage
    let fileURL = "";
    await getDownloadURL(storageRef).then((res) => {
      fileURL = res;
      dispatch(heroActions.handleHeroInfo({ imageURL: fileURL }));
    });

    dispatch(heroActions.handleIsLoading(false));
  };
};

export const updateHeroStorageHandler = (data, path) => {
  return async (dispatch) => {
    dispatch(heroActions.handleIsLoading(true));
    //connect to storage
    const storage = getStorage();

    //check if file paths match. if not delete old file.
    if (path !== `image/hero/${data.name}`) {
      //storage ref
      const deleteRef = ref(storage, path);

      //delete old image
      deleteObject(deleteRef).then((res) => {
        console.log(res);
      });
    }

    dispatch(heroActions.handleFilePath(`images/hero/${data.name}`));

    //connect to storage
    const storageRef = ref(storage, `images/hero/${data.name}`);

    //save new file to storage
    await uploadBytes(storageRef, data).then((res) => {
      console.log(res);
    });

    //get URL for new file from storage
    let fileURL = "";
    await getDownloadURL(storageRef).then((res) => {
      fileURL = res;
      dispatch(heroActions.handleHeroInfo({ imageURL: fileURL }));
    });

    dispatch(heroActions.handleIsLoading(false));
  };
};
