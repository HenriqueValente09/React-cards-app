import React, { useEffect, useReducer, useState } from "react";
import FormButton from "../Button/FormButton";
import Dropdown from "../Inputs/Dropdown";
import TextInput from "../Inputs/TextInput";
import ImageInput from "components/Inputs/ImageInput";
import ColorInput from "components/Inputs/ColorInput";
import { v4 as uuid } from 'uuid';

function reducer(state, action) {
  if (action.type === "update_name") {
    return {
      ...state,
      name: action.payload
    };
  }
  if (action.type === "update_region") {
    return {
      ...state,
      region: action.payload
    };
  }
  if (action.type === "update_image") {
    return {
      ...state,
      image: action.payload
    };
  }
  if (action.type === "update_class") {
    return {
      ...state,
      class: action.payload
    };
  }
  if (action.type === "update_color") {
    return {
      ...state,
      color: action.payload
    };
  }
  if (action.type === "update_id") {
    return {
      ...state,
      id: action.payload
    };
  }
  throw Error('Unknown action.');
}

const Form = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    id: "",
    name: "",
    region: "",
    image: "",
    class: "Warrior",
    color: "red",
  });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const onSave = (e) => {
    e.preventDefault();
    dispatch({ type: "update_id", payload: uuid() })
  };

  useEffect(() => {
    if (state.id !== "") {
      props.sendCards(state);
    }
  }, [state.id]);

  return (
    <section className="w-full">
      <form
        onSubmit={onSave}
        className="w-4/6 mx-auto my-8 flex flex-col justify-center items-start p-8 shadow-lg bg-slate-100"
      >
        <TextInput
          value={state.name}
          onChange={e => dispatch({ type: "update_name", payload: e })}
          required
          label="Nome"
          placeholder=""
          type="text"
        />
        <TextInput
          required
          value={state.region}
          label="Sobrenome"
          placeholder=""
          type="text"
          onChange={e => dispatch({ type: "update_region", payload: e })}
        />
        {/* <ImageInput
          required
          value={state.image}
          label="Imagem"
          accept=".png, .jpg"
          onChange={(img) => dispatch({ type: "update_image", payload: img })}
        /> */}
        <TextInput
          required
          value={state.image}
          onChange={e => dispatch({ type: "update_image", payload: e })}
          label="Imagem"
          placeholder="Imagem"
          type="text"
        />
        {/* <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
        /> */}
        {!isChecked ? <Dropdown
          value={state.class}
          items={props.classes}
          label="Nota"
          onChange={e => dispatch({ type: "update_class", payload: e })}
        ></Dropdown>:
        <TextInput
          required
          value={state.class}
          onChange={e => dispatch({ type: "update_class", payload: e })}
          label="Classe"
          placeholder="Classe"
          type="text"
        />
        }
        <ColorInput label="Fundo" onChange={e => dispatch({ type: "update_color", payload: e })}/>
        <FormButton>Criar card</FormButton>
      </form>
    </section>
  );
};

export default Form;
