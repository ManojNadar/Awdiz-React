import React from "react";

const ShoDetails = ({ myUsers, setMyUsers }) => {
  return (
    <>
      <h2>Show Data </h2>
      <p>{myUsers}</p>
      <button onClick={() => setMyUsers([...myUsers, "hello"])}>
        Add Data
      </button>
    </>
  );
};

export default ShoDetails;
