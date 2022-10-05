import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./Events.scss";

//components
import EventsModal from "./EventsModal/EventsModal";
import EventsOverlay from "./EventsModal/EventsOverlay";

//redux
import { useDispatch, useSelector } from "react-redux";
import { eventsAction } from "../../../ReduxStore/slices/EventsSlice";

function Events() {
  const dispatch = useDispatch();
  const eventModal = useSelector((state) => state.events.eventModal);

  const eventModalHandler = () => {
    dispatch(eventsAction.handleEventModal(false));
  };

  const photoHandler = () => {
    dispatch(eventsAction.handleEventModal(true));
  };

  return (
    <div className="events-section">
      <Fragment>
        {eventModal &&
          ReactDOM.createPortal(
            <EventsModal />,
            document.getElementById("events-root")
          )}
        {eventModal &&
          ReactDOM.createPortal(
            <EventsOverlay eventModalHandler={eventModalHandler} />,
            document.getElementById("overlay-root")
          )}
      </Fragment>
      <div className="events-home-title">
        <h1>Latest Events</h1>
      </div>
      <div className="events-home-wrapper columns">
        <div className="column-left">
          <img
            className="img1"
            src={process.env.PUBLIC_URL + "Images/events/Events-1.png"}
            alt=""
            onClick={photoHandler}
            style={{ cursor: "pointer" }}
          />
        </div>
        {/* <div className="column-middle"> */}
        <div className="top-img">
          <img
            className="img2"
            src={process.env.PUBLIC_URL + "Images/events/Events-2.png"}
            alt=""
          />
        </div>
        <div className="bottom-img">
          <img
            className="img3"
            src={process.env.PUBLIC_URL + "Images/events/Events-3.png"}
            alt=""
          />
        </div>
        {/* </div>
        <div className="colum-right"> */}
        <div className="top-img">
          <img
            className="img4"
            src={process.env.PUBLIC_URL + "Images/events/Events-4.png"}
            alt=""
          />
        </div>
        <div className="bottom-img">
          <img
            className="img5"
            src={process.env.PUBLIC_URL + "Images/events/Events-5.png"}
            alt=""
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Events;
