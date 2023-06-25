import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function sub() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <button onClick={add}>Add +</button>
      {count}
      <button onClick={sub}>Sub -</button>
    </div>
  );
};

export default Counter;
