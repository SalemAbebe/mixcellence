import React, { createContext } from "react";

//components
import ServiceForm from "./ServiceForm/ServiceForm";
import ServiceInputFile from "./ServiceInputFile/ServiceInputFile";

//styles
import "./Service.scss";

//redux
import { useDispatch, useSelector } from "react-redux";
import { servicesActions } from "../../../../ReduxStore/slices/ServicesSlice";
import { deleteFirebaseHandler } from "../../../../ReduxStore/thunks/Services/ServicesDatabaseThunks";
import { deleteStorageHandler } from "../../../../ReduxStore/thunks/Services/ServicesStorageThunks";

export const IndexContext = createContext({});

function Service({ index }) {
  const dispatch = useDispatch();
  const dataId = useSelector((state) => state.services.dataId);

  const deleteComponentHandler = () => {
    dispatch(servicesActions.handleDecreaseComponentArrSize(index));
    dispatch(deleteFirebaseHandler(dataId[index]));
    dispatch(deleteStorageHandler(index));
    dispatch(servicesActions.handleDeleteImageURL(index));
    dispatch(servicesActions.handleDeleteDataId(index));
  };

  return (
    <IndexContext.Provider value={{ index: index }}>
      <div className="service-container">
        <div className="service-wrapper">
          <ServiceInputFile />
          <ServiceForm />
        </div>
        <div className="button-wrapper">
          <div className="delete-section-control">
            <button
              className="delete-section-button"
              id="delete"
              onClick={deleteComponentHandler}
            >
              Delete
            </button>
          </div>
          <div className="services-form-button-control">
            <button form={index} className="services-form-button" type="submit">
              {dataId[index] !== undefined ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </IndexContext.Provider>
  );
}

export default Service;
