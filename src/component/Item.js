import React, { useState } from "react";

const Item = ({ content, id, deleteTodo }) => {
  const [check, setCheck] = useState(false);
  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <li>
      <input
        type='checkbox'
        onChange={() => {
          setCheck(!check);
        }}></input>
      <span style={{ textDecoration: check ? "line-through" : "none" }}>
        {content}
      </span>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};

export default Item;
