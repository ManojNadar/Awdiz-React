import React from "react";
import { useNavigate } from "react-router-dom";
import products from "./../Products.json";

const Params = () => {
  const router = useNavigate();

  return (
    <>
      <h1>Products</h1>
      {/* <button onClick={goToParams}>Go to</button> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {products.map((item) => {
          return (
            <div
              key={item.p_id}
              style={{
                backgroundColor: "whiteSmoke",
                width: "22%",
                margin: "5px 0",
              }}
            >
              <p style={{ backgroundColor: "aqua" }}>{item.p_id}</p>
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <p>{item.Quantity}</p>
              <button onClick={() => router(`/UseParams/${item.p_id}`)}>
                View Product
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Params;
