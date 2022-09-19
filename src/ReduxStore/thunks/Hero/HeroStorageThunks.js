//firebase
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { heroActions } from "../../slices/HeroSlice";

export const heroStorageHandler = (data) => {
  return async (dispatch) => {
    dispatch(heroActions.handleIsLoading(true));

    //connect to storage
    const storage = getStorage();
    const storageRef = ref(storage, `images/hero/hero.png`);

    //save file to storage
    await uploadBytes(storageRef, data).then((res) => {
      console.log(res);
    });

    //get URL for file from storage
    let fileURL = "";
    await getDownloadURL(storageRef).then((res) => {
      fileURL = res;
      dispatch(heroActions.handleImageURL(fileURL));
    });

    dispatch(heroActions.handleIsLoading(false));
  };
};

export const updateHeroStorageHandler = (data) => {
  return async (dispatch) => {
    dispatch(heroActions.handleIsLoading(true));
    //connect to storage
    const storage = getStorage();
    const storageRef = ref(storage, `images/hero/hero.png`);

    //save new file to storage
    await uploadBytes(storageRef, data).then((res) => {
      console.log(res);
    });

    //get URL for new file from storage
    let fileURL = "";
    await getDownloadURL(storageRef).then((res) => {
      fileURL = res;
      dispatch(heroActions.handleImageURL(fileURL));
    });

    dispatch(heroActions.handleIsLoading(false));
  };
};
