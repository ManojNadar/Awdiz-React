import React, { useEffect, useState } from "react";

const UseEffectEmptyDep = () => {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((prevVal) => prevVal + 1);
  }

  useEffect(() => {
    console.log("empty dependencies useFfect called");
  }, []); // executes only on first render..ex..window.onload
  return (
    <>
      <h1>{count}</h1>
      <h2>UseEffect Empty Dependencies</h2>

      <button onClick={addCount}>add count </button>
    </>
  );
};

export default UseEffectEmptyDep;
