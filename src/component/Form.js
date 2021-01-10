import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ addTodo }) => {
  const { register, handleSubmit, reset, errors } = useForm();

  const err = (data) => {
    addTodo(data.value);

    reset();
  };
  return (
    <form onSubmit={handleSubmit(err)}>
      <label>Todo入力</label>
      <input
        type='text'
        // value={value}
        ref={register({ required: true })}
        name='value'
        // onChange={(e) => {
        //   setValue(e.target.value);
        // }}
      ></input>
      {errors.value && <span>Error : Please input the text</span>}
    </form>
  );
};

export default Form;
