import React from "react";

//components
import InputFile from "./InputFile/InputFile";
import PreviewImage from "./PreviewImage/PreviewImage";

//redux
import { useSelector } from "react-redux";

function HeroInputFile() {
  const isLoading = useSelector((state) => state.hero.backEnd.isLoading);
  const URL = useSelector((state) => state.hero.backEnd.imageURL);

  return (
    <div>
      {isLoading ? <p>...Loading</p> : null}
      {!URL && !isLoading && <InputFile />}
      {URL && !isLoading && <PreviewImage />}
    </div>
  );
}

export default HeroInputFile;
