import React from "react";
import "./Events.scss";

function Events() {
  return (
    <div className="events-section">
      <div className="events-home-wrapper columns">
        <div className="bg-color">
          <img
            className="img1"
            src={process.env.PUBLIC_URL + "Images/Events-1.png"}
            alt=""
          />
        </div>
        <div className="bg-color">
          <div className="top-img">
            <img
              className="img2"
              src={process.env.PUBLIC_URL + "Images/Events-2.png"}
              alt=""
            />
          </div>
          <div className="bottom-img">
            <img
              className="img3"
              src={process.env.PUBLIC_URL + "Images/Events-3.png"}
              alt=""
            />
          </div>
        </div>
        <div className="bg-color">
          <div className="top-img">
            <img
              className="img4"
              src={process.env.PUBLIC_URL + "Images/Events-4.png"}
              alt=""
            />
          </div>
          <div className="bottom-img">
            <img
              className="img5"
              src={process.env.PUBLIC_URL + "Images/Events-5.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
