import React from "react";

const TextInput = (props) => {
    const { label, ...input} = props;

    const updateValue = (e) => {
        props.onChange(e.target.value)
    }

    return(
        <div className="mb-5 w-full">
            <label htmlFor="name" className="mb-2 block">{label}</label>
            <input {...input} onChange={updateValue} className="border-0 input-shadow h-10 px-3 w-full"/>
        </div>
    )
}

export default TextInput