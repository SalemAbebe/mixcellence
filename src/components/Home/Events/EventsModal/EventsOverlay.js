import React from "react";

//styles
import "./EventsModal.scss";

function EventsOverlay({ eventModalHandler }) {
  return <div className="events-overlay" onClick={eventModalHandler}></div>;
}

export default EventsOverlay;
