import React, { useContext } from "react";

//components
import InputFile from "./InputFile/InputFile";
import PreviewImage from "./PreviewImage/PreviewImage";

//context
import { IndexContext } from "../Service";

//redux
import { useSelector } from "react-redux";

function ServiceInputFile() {
  const { index } = useContext(IndexContext);
  const isLoading = useSelector((state) => state.services.isLoading);
  const URL = useSelector((state) => state.services.imageURL);

  return (
    <div>
      {isLoading ? <p>...Loading</p> : null}
      {URL[index] === undefined && !isLoading && <InputFile />}
      {URL[index] !== undefined && !isLoading && <PreviewImage />}
    </div>
  );
}

export default ServiceInputFile;
