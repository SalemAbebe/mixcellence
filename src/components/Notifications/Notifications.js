import React, { Fragment } from "react";
import ReactDOM from "react-dom";

//components
import ErrorModal from "./ErrorModal/ErrorModal";
import ErrorOverlay from "./ErrorModal/ErrorOverlay";
import SuccessModal from "./SuccessModal/SuccessModal";
import SuccessOverlay from "./SuccessModal/SuccessOverlay";

//redux
import { useDispatch, useSelector } from "react-redux";
import { notificationActions } from "../../ReduxStore/slices/NotificationSlice";

function Notifications() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.notification.error.isError);
  const success = useSelector((state) => state.notification.success.isSuccess);

  const errorHandler = () => {
    dispatch(
      notificationActions.handleError({ isError: false, message: null })
    );
  };

  const successHandler = () => {
    dispatch(
      notificationActions.handleSuccess({ isSuccess: false, message: null })
    );
  };

  return (
    <div>
      <Fragment>
        {error &&
          ReactDOM.createPortal(
            <ErrorModal errorHandler={errorHandler} />,
            document.getElementById("error-root")
          )}
        {error &&
          ReactDOM.createPortal(
            <ErrorOverlay errorHandler={errorHandler} />,
            document.getElementById("overlay-root")
          )}
      </Fragment>
      <Fragment>
        {success &&
          ReactDOM.createPortal(
            <SuccessModal successHandler={successHandler} />,
            document.getElementById("success-root")
          )}
        {success &&
          ReactDOM.createPortal(
            <SuccessOverlay successHandler={successHandler} />,
            document.getElementById("overlay-root")
          )}
      </Fragment>
    </div>
  );
}

export default Notifications;
