import React, { useCallback, useState } from "react";
import CallBackHookTodo from "./CallBackHookTodo";

const CallBackHook = () => {
  const [count, setCount] = useState(0);

  const [todo, setTodo] = useState(["todo1", "todo2", "todo3"]);

  //   function addTodo() {
  //     setTodo([...todo, "newTodo added"]);
  //   }

  const addTodo = useCallback(() => {
    setTodo([...todo, "new todo added"]);
  }, [todo]);

  return (
    <>
      <CallBackHookTodo todo={todo} addTodo={addTodo} />
      <h2>Count : {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
};

export default CallBackHook;
