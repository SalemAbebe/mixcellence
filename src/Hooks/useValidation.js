import { useState } from "react";

export const useValidation = (validation) => {
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState("");

  const isValid = validation(value);
  const error = !isValid && touched;

  const handleOnBlur = () => {
    setTouched(true);
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setTouched(false);
    setValue("");
  };

  return {
    value,
    isValid,
    error,
    handleOnChange,
    handleOnBlur,
    reset,
  };
};
