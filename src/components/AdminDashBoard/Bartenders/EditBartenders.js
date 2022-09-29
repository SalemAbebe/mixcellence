import React from "react";

//component
import AddBartenderButton from "./AddBartenderButton";
import Bartender from "./Bartender/Bartender";

//redux
import { useSelector } from "react-redux";

//styles
import "./EditBartenders.scss";

function EditBartenders() {
  const compArrSize = useSelector((state) => state.bartenders.componentArrSize);

  const addComponentMap = compArrSize.map((item, index) => {
    return <Bartender key={item} index={index} />;
  });

  return (
    <div className="edit-bartenders-container">
      <div className="edit-bartenders-wrapper">
        <h1>Bartenders</h1>
        <span />
        <div className="bartenders-section-container">{addComponentMap}</div>
        <AddBartenderButton />
      </div>
    </div>
  );
}

export default EditBartenders;
