import "../App.css";
import React, { useState } from "react";

const DynamicClasses = () => {
  const [btn, setBtn] = useState(true);
  //   console.log(btn);

  const changeBtnStyle = btn ? "active" : "non-active";
  return (
    <div>
      <h1 className="red">Dynamic Classes</h1>

      <button className={changeBtnStyle} onClick={() => setBtn(!btn)}>
        {btn ? "active button" : " non-active-button"}
      </button>
    </div>
  );
};

export default DynamicClasses;
