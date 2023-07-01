import React, { useState } from "react";
import ShoDetails from "./ShoDetails";

const Home = () => {
  let myArr = [];
  const [myUsers, setMyUsers] = useState(myArr);

  return (
    <div>
      <h1>Home</h1>
      <ShoDetails myUsers={myUsers} setMyUsers={setMyUsers} />
    </div>
  );
};

export default Home;
