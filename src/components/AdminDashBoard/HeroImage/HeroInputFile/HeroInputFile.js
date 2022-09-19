import React from "react";

//components
import InputFile from "./InputFile/InputFile";
import PreviewImage from "./PreviewImage/PreviewImage";

//redux
import { useSelector } from "react-redux";

function HeroInputFile() {
  const isLoading = useSelector((state) => state.hero.backEnd.isLoading);
  const heroInfo = useSelector((state) => state.hero.backEnd.heroInfo);

  return (
    <div>
      {isLoading ? <p>...Loading</p> : null}
      {!heroInfo.photo && !isLoading && <InputFile />}
      {heroInfo.photo && !isLoading && <PreviewImage />}
    </div>
  );
}

export default HeroInputFile;
