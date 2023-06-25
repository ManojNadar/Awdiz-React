import React, { useState } from "react";

const IsLogged = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h2>{isLoggedIn ? <button>Logout</button> : <button>Login</button>}</h2>
    </>
  );
};

export default IsLogged;
