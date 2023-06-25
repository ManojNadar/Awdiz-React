import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>

      {count}
      {count <= 0 ? (
        <button disabled>Subtraction</button>
      ) : (
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Subtraction
        </button>
      )}
    </>
  );
};

export default CounterApp;
