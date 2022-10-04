import React from "react";
import "./Events.scss";

function Events() {
  return (
    <div className="events-section">
      <div className="events-home-title">
        <h1>Latest Events</h1>
      </div>
      <div className="events-home-wrapper columns">
        <div className="column-left">
          <img
            className="img1"
            src={process.env.PUBLIC_URL + "Images/events/Events-1.png"}
            alt=""
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
