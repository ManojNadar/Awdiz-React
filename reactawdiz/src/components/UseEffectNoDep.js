import React, { useEffect, useState } from "react";

const UseEffectNoDep = () => {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((preVal) => preVal + 1);
  }

  useEffect(() => {
    console.log("no dependencies useEffect called");
  }); // execute on every re-render
  return (
    <>
      <h1>{count}</h1>

      <h2>UseEffect no dependencies</h2>

      <button onClick={addCount}>Add Count</button>
    </>
  );
};

export default UseEffectNoDep;
