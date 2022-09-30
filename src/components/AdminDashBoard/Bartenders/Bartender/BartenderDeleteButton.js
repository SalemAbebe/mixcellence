import React, { useContext } from "react";

//context
import { IndexContext } from "./Bartender";

//redux
import { useDispatch, useSelector } from "react-redux";
import { bartendersActions } from "../../../../ReduxStore/slices/BartendersSlice";
import { deleteFirebaseHandler } from "../../../../ReduxStore/thunks/Bartenders/BartendersDatabaseThunks";
import { deleteStorageHandler } from "../../../../ReduxStore/thunks/Bartenders/BartendersStorageThunks";

function BartenderDeleteButton() {
  const dispatch = useDispatch();
  const { index } = useContext(IndexContext);
  const dataId = useSelector((state) => state.bartenders.dataId);

  const deleteComponentHandler = () => {
    dispatch(deleteFirebaseHandler(dataId[index]));
    dispatch(deleteStorageHandler(index));
    dispatch(bartendersActions.handleDeleteBartender(index));
  };

  return (
    <div className="bartender-delete-section-control">
      <button
        className="bartender-delete-section-button"
        onClick={deleteComponentHandler}
      >
        Delete
      </button>
    </div>
  );
}

export default BartenderDeleteButton;
