import React, { useReducer } from "react";
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
      id: action.id
    };
  }
  throw Error('Unknown action.');
}

const Form = (props) => {
  const classes = ["Warrior", "Mage", "Brawler", "Assassin", "Archer"];

  const [state, dispatch] = useReducer(reducer, {
    id: "",
    name: "",
    region: "",
    image: "",
    class: "Warrior",
    color: "red"
  });

  const onSave = (e) => {
    e.preventDefault();
    dispatch({ type: "update_id", id: uuid() })
    console.log(state)
    props.sendCards(state)
  };

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
        <ImageInput
          required
          value={state.image}
          label="Imagem"
          accept=".png, .jpg"
          onChange={(img) => dispatch({ type: "update_image", payload: img })}
        />
        <Dropdown
          value={state.class}
          items={classes}
          label="Class"
          onChange={e => dispatch({ type: "update_class", payload: e })}
        ></Dropdown>
        <ColorInput label="Fundo" onChange={e => dispatch({ type: "update_color", payload: e })}/>
        <FormButton>Criar card</FormButton>
      </form>
    </section>
  );
};

export default Form;
