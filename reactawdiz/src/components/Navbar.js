import React from "react";
import "../App.css";
// import { Link } from "react-router-dom";
const Navbar = () => {
  const style = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "grey",
  };

  return (
    <div style={style}>
      <h2>Navbar</h2>

      <div className="link">
        {/* <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
