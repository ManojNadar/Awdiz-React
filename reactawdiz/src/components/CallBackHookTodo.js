import React, { memo } from "react";

const CallBackHookTodo = ({ todo, addTodo }) => {
  console.log("added todo");
  return (
    <>
      <h2>Todo</h2>
      {todo.map((item, i) => (
        <h1 key={i}>{item}</h1>
      ))}
      <button onClick={addTodo}>Add new Todo</button>
    </>
  );
};

export default memo(CallBackHookTodo);
