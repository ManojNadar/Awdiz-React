import React, { useEffect, useState } from "react";

const useEffectsingleDep = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);

  useEffect(() => {
    console.log("useeffect single dependency");
  }, [counter]);

  return (
    <>
      <h1>useEffect single Dependency</h1>
      {counter} <br />
      <button onClick={() => setCounter((num) => num + 1)}>
        counter + 1
      </button>{" "}
      <br />
      {counter2} <br />
      <button onClick={() => setCounter2((num) => num + 1)}>
        counter2 + 1
      </button>
    </>
  );
};

export default useEffectsingleDep;
