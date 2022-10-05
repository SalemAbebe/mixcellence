import React from "react";

//redux
import { useSelector } from "react-redux";

//styles
import "./ContactModal.scss";

function ContactModal({ showModalHandler }) {
  const showModal = useSelector((state) => state.contact.modal);
  return (
    <div className="contact-modal-container" onClick={showModalHandler}>
      <p>{showModal.message}</p>
    </div>
  );
}

export default ContactModal;
