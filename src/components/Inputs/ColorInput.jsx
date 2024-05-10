import React from "react";

const ColorInput = (props) => {
    const { label, ...input} = props;

    const updateValue = (e) => {
        props.onChange(e.target.value)
    }

    return(
        <div className="mb-5 w-full">
            <label className="mb-2 block">{label}</label>
            <input {...input} type="color" onChange={updateValue} className="border-0 input-shadow w-[50px] h-[50px] p-0 cursor-pointer"/>
        </div>
    )
}

export default ColorInput