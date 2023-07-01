import React from "react";
import { useParams } from "react-router-dom";

const UseParamsId = () => {
  const data = useParams();
  return (
    <>
      <h2>Use Params </h2>
      <h1 style={{ backgroundColor: "aqua" }}>
        product Id : {data && data.id}
      </h1>
    </>
  );
};

export default UseParamsId;
