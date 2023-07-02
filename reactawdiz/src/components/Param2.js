import React from "react";
import { useNavigate } from "react-router-dom";

const Param2 = () => {
  const router = useNavigate();
  function redirect() {
    router("/singleparam/555");
  }
  return (
    <div>
      <h1>Param</h1>
      <button onClick={redirect}>go to single param</button>
    </div>
  );
};

export default Param2;
