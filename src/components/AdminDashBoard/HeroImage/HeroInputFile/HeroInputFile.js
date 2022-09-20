import React from "react";

//components
import InputFile from "./InputFile/InputFile";
import PreviewImage from "./PreviewImage/PreviewImage";

//redux
import { useSelector } from "react-redux";

function HeroInputFile() {
  const isLoading = useSelector((state) => state.hero.isLoading);
  const URL = useSelector((state) => state.hero.imageURL);

  return (
    <div>
      {isLoading ? <p>...Loading</p> : null}
      {!URL && !isLoading && <InputFile />}
      {URL && !isLoading && <PreviewImage />}
    </div>
  );
}

export default HeroInputFile;
