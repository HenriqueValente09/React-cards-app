import React from "react";
import { useEffect, useState } from "react";

const FormButton = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`Botão apertado ${value} vezes`);
      setValue(0)
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <button
      onClick={increment}
      type={props.type}
      className="py-4 px-6 bg-purple-200 self-start rounded"
    >
      {props.children}
    </button>
  );
};

export default FormButton;
