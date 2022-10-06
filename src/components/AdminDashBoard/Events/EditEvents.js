import React from "react";

//components
import EventMainImage from "./EventMainImage/EventMainImage";
import SmallEvents from "./SmallEvents/SmallEvents";

//styles
import "./EditEvents.scss";

const EditEvents = () => {
  return (
    <div className="edit-events-section">
      <h1 className="edit-events-header">Events</h1>
      <div className="edit-events-wrapper">
        <EventMainImage />
        <div className="small-events-wrapper">
          <div className="small-events-first-row">
            <SmallEvents index={1} />
            <SmallEvents index={2} />
          </div>
          <div className="small-events-second-row">
            <SmallEvents index={3} />
            <SmallEvents index={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvents;
