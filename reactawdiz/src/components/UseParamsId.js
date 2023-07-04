import React from "react";
import { useParams } from "react-router-dom";
import product from "../Products.json";

const UseParamsId = () => {
  const data = useParams();
  console.log(data);
  return (
    <>
      {/* <h2>Use Params </h2>
      <h1 style={{ backgroundColor: "aqua" }}>
        product Id : {data && data.id}
      </h1> */}
      {product
        .filter((element) => data.id === element.p_id)
        .map((e) => (
          <div>
            <h1>{e.name}</h1>
            <h1>{e.price}</h1>
            <h1>{e.description}</h1>
            <h1>{e.category}</h1>
          </div>
        ))}
    </>
  );
};

export default UseParamsId;
