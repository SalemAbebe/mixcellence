import React from "react";
import "./FAQ.scss";

function FAQ() {
  return (
    <div className="FAQ-home">
      <div className="FAQ-home-title">
        <h1>FAQ</h1>
      </div>

      <div className="FAQ-home-wrapper">
        <div className="question-answer">
          <div className="question-wrapper">
            <p className="question"></p>
            <div>
              <hr className="1" />
              <hr />
            </div>
          </div>
        </div>
        <div className="answer">
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
