import React from "react";

//component
import ImageInput from "./ImageInput/ImageInput";
import ImagePreview from "./ImagePreview/ImagePreview";

//redux
import { useSelector } from "react-redux";

function EventsImageInput() {
  const isLoading = useSelector((state) => state.events.photoInfo1.isLoading);
  const URL = useSelector((state) => state.events.photoInfo1.imgURL);

  return (
    <div>
      {isLoading ? <p>...Loading</p> : null}
      {!URL && !isLoading && <ImageInput />}
      {URL && !isLoading && <ImagePreview />}
    </div>
  );
}

export default EventsImageInput;
