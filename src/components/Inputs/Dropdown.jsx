import React from "react"

const Dropdown = (props) => {
    const updateValue = (e) => {
        props.onChange(e.target.value)
    }

    return(
        <div className="w-full mb-5">
            <label className="mb-2 block">{props.label}</label>
            <select {...props} onChange={updateValue} name="" id="" className="border-0 input-shadow h-10 px-3 w-full">
                {props.items.map(item => {
                    return <option value={item} key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropdown