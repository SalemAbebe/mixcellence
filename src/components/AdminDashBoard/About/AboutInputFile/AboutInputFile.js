import React from "react";

//component
import InputFile from "./InputFile/InputFile";
import PreviewFile from "./PreviewImage/PreviewImage";

//redux
import { useSelector } from "react-redux";

function AboutInputFile() {
  const isLoading = useSelector((state) => state.about.isLoading);
  const URL = useSelector((state) => state.about.imageURL);

  return (
    <div>
      {isLoading ? <p>...Loading</p> : null}
      {!URL && !isLoading && <InputFile />}
      {URL && !isLoading && <PreviewFile />}
    </div>
  );
}

export default AboutInputFile;
