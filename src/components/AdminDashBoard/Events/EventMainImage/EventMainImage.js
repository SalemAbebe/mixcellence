import React from "react";

//components
import InputFile from "./InputFile/InputFile";
import PreviewImage from "./PreviewImage/PreviewImage";

//redux
import { useSelector } from "react-redux";

const index = 0;

function EventMainImage() {
  const URL = useSelector((state) => state.events.photoArr);

  return (
    <div>
      {URL[index] === undefined && <InputFile />}
      {URL[index] !== undefined && <PreviewImage index={index} />}
    </div>
  );
}

export default EventMainImage;
