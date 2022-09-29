import React from "react";

function BartenderDeleteButton() {
  const deleteComponentHandler = () => {};

  return (
    <div className="bartender-delete-section-control">
      <button
        className="bartender-delete-section-button"
        onClick={deleteComponentHandler}
      >
        Delete
      </button>
    </div>
  );
}

export default BartenderDeleteButton;
