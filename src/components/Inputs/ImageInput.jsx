import React, { useState } from "react";

const ImageInput = (props) => {
  const { label, onChange, value, ...input } = props;

  const [imageSrc, setImageSrc] = useState(value);

  const updateValue = (e) => {
    const reader = new FileReader();
    reader.onloadend = (file) => {
      const image = file.target.result;
      setImageSrc(image.toString());
      onChange(image.toString())
    };
    if (e?.target?.files.length > 0) {
      reader.readAsDataURL(e.target.files[0]);
    }
    setImageSrc('')
  };

  

  return (
    <>
      <div className="mb-5 relative">
        <label className="mb-2 block">{label}</label>
        <label
          htmlFor="imageInput"
          className={"flex relative h-[250px] w-[250px] " + (imageSrc ? '' : "bg-white border-[3px]") + " cursor-pointer rounded-3xl justify-center items-center"}
        >
          <p className="absolute text-slate-400">Selecionar imagem</p>
          <img src={imageSrc} alt="" className="absolute max-h-[100%]"/>
        </label>
        <input
          {...input}
          id="imageInput"
          type="file"
          onChange={updateValue}
          className="border-0 input-shadow h-10 px-3 w-full opacity-0 m-0 p-0 w-full absolute bottom-[5%]"
        />
      </div>
    </>
  );
};

export default ImageInput;
