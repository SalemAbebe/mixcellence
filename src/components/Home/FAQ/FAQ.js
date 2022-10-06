import React from "react";

//data
import { faqData } from "./FAQData";

//redux
import { useDispatch, useSelector } from "react-redux";
import { FAQActions } from "../../../ReduxStore/slices/FAQSlice";

//styles
import "./FAQ.scss";

function FAQ() {
  const dispatch = useDispatch();
  const showAnswer = useSelector((state) => state.FAQ.showAnswer);

  const showAnswerHandler = (index) => {
    if (showAnswer !== index) {
      dispatch(FAQActions.handleShowAnswer(index));
    }
  };
  return (
    <div id="faq" className="FAQ-home">
      <h1 className="FAQ-header">FAQ</h1>

      <div className="FAQ-wrapper">
        {faqData.map((item, index) => {
          return (
            <div key={item.id} className="faq-section">
              <div className="faq-control">
                <h5 className="faq-title">{item.title}</h5>
                <div
                  className="symbol"
                  onClick={() => showAnswerHandler(index)}
                >
                  {showAnswer === index ? "-" : "+"}
                </div>
              </div>
              <span />
              {showAnswer === index ? (
                <p
                  className={
                    "faq-text " + (showAnswer === index ? "active" : "")
                  }
                >
                  {item.text}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
