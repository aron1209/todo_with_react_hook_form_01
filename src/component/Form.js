import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ addTodo }) => {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState("");
  const err = (e) => {
    !value ? alert("Please input text") : addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit(err)}>
      <label>Todo入力</label>
      <input
        type='text'
        value={value}
        ref={register({ required: true })}
        onChange={(e) => {
          setValue(e.target.value);
        }}></input>
    </form>
  );
};

export default Form;
