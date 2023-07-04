import React, { useState } from "react";

const DynamicStyle = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");

  const changeBackground = () => {
    setBackgroundColor("blue");
  };

  const style = {
    backgroundColor: backgroundColor,
    color: "white",
  };
  return (
    <div>
      <h2>{backgroundColor}</h2>
      <h1 style={style} onClick={changeBackground}>
        Dynamic Style
      </h1>
    </div>
  );
};

export default DynamicStyle;
