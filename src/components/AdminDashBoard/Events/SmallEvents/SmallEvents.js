import React from "react";

//components
import InputFile from "./InputFile/InputFile";
import PreviewFile from "./PreviewImage/PreviewImage";

//redux
import { useSelector } from "react-redux";

function SmallEvents({ index }) {
  const URL = useSelector((state) => state.events.photoArr);
  return (
    <div>
      {URL[index] === undefined && <InputFile />}
      {URL[index] !== undefined && <PreviewFile index={index} />}
    </div>
  );
}

export default SmallEvents;
