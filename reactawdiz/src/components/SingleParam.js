import React from "react";
import { useParams } from "react-router-dom";

const SingleParam = () => {
  const data = useParams();
  console.log(data);
  return (
    <div>
      <h1>Single Param</h1>
      {data.id && data.id}
    </div>
  );
};

export default SingleParam;
