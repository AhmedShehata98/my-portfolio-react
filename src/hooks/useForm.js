import { useState } from "react";
const useForm = (initialValue) => {
  let [value, setValue] = useState(initialValue);

  let bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  let reset = () => {
    setValue("");
  };
  return [value, bind, reset];
};
export default useForm;
