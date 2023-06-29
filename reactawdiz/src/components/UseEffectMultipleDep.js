import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UseEffectMultipleDep = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);
  const [counter3, setCounter3] = useState(20);

  const router = useNavigate();

  useEffect(() => {
    console.log("useeffect Multiple dependencies");
  }, [counter, counter3]);
  return (
    <>
      <h1>useEffect Multiple Dependencies</h1>
      {counter} <br />
      <button onClick={() => setCounter((num) => num + 1)}>counter + 1</button>
      <br />
      {counter2} <br />
      <button onClick={() => setCounter2((num) => num + 1)}>
        counter2 + 1
      </button>
      <br />
      {counter3} <br />
      <button onClick={() => setCounter3((num) => num + 1)}>
        counter3 + 1
      </button>{" "}
      <br />
      <button onClick={() => router("/")}>Redirect to Home</button>
      <button onClick={() => router("/login")}>Redirect to Login</button>
    </>
  );
};

export default UseEffectMultipleDep;
