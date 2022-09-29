import React, { useContext } from "react";

//components
import InputFile from "./InputFile/InputFile";
import PreviewImage from "./PreviewImage/PreviewImage";

//context
import { IndexContext } from "../Bartender";

//redux
import { useSelector } from "react-redux";
function BartenderInputFile() {
  const { index } = useContext(IndexContext);
  const isLoading = useSelector((state) => state.bartenders.isLoading);
  const URL = useSelector((state) => state.bartenders.imageURL);

  return (
    <div>
      {isLoading ? <p>...Loading</p> : null}
      {URL[index] === undefined && !isLoading && <InputFile />}
      {URL[index] !== undefined && !isLoading && <PreviewImage />}
    </div>
  );
}

export default BartenderInputFile;
