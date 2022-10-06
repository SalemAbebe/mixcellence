import React from "react";
import "./Welcome.scss";

function Welcome() {
  return (
    <div className="welcome">
      <img src={process.env.PUBLIC_URL + "Images/profile-pic.png"} alt="" />
      <h1>Welcome Roel!</h1>
    </div>
  );
}

export default Welcome;
