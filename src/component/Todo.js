import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import shortid from "shortid";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (content) => {
    setTodos([...todos, { content: content, id: shortid.generate() }]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h1>This is Todo List</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
