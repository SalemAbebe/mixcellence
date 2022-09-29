import React from "react";

//context
import { IndexContext } from "./Service";

//redux
import { useDispatch, useSelector } from "react-redux";
import { servicesActions } from "../../../../ReduxStore/slices/ServicesSlice";
import { deleteFirebaseHandler } from "../../../../ReduxStore/thunks/Services/ServicesDatabaseThunks";
import { deleteStorageHandler } from "../../../../ReduxStore/thunks/Services/ServicesStorageThunks";
import { useContext } from "react";

function ServiceDeleteButton() {
  const dispatch = useDispatch();
  const { index } = useContext(IndexContext);
  const dataId = useSelector((state) => state.services.dataId);

  const deleteComponentHandler = () => {
    dispatch(servicesActions.handleDecreaseComponentArrSize(index));
    dispatch(deleteFirebaseHandler(dataId[index]));
    dispatch(deleteStorageHandler(index));
    dispatch(servicesActions.handleDeleteImageURL(index));
    dispatch(servicesActions.handleDeleteDataId(index));
  };
  return (
    <div className="service-delete-section-control">
      <button
        className="service-delete-section-button"
        onClick={deleteComponentHandler}
      >
        Delete
      </button>
    </div>
  );
}

export default ServiceDeleteButton;
