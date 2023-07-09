import React, { useMemo, useState } from "react";

const UseMemoHooks = () => {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState(["eat", "sleep", "code"]);

  const number = useMemo(() => {
    return ExpensiveCalaculation(count);
  }, [count]);

  //   const number = ExpensiveCalaculation(count);

  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addTodo = () => {
    setTodos([...todos, "repeat"]);
  };
  return (
    <>
      <h2>expensive Count : {number}</h2>
      <h1>Count :{count}</h1>
      <button onClick={addCount}>Add Count</button>

      <h2>Todo :</h2>

      {todos.map((item, i) => {
        return <h2 key={i}>{item}</h2>;
      })}
      <button onClick={addTodo}>Add todo</button>
    </>
  );
};

function ExpensiveCalaculation(num) {
  console.log("expensive calculation called");
  for (let i = 0; i < 100000; i++) {
    num = num + 1;
  }

  return num;
}

export default UseMemoHooks;
