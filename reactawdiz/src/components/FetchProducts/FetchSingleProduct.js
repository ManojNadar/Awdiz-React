import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FetchSingleProduct = () => {
  const [singleData, setSingleData] = useState([]);
  const param = useParams();

  //   console.log(param);

  const { id } = param;
  console.log(singleData);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setSingleData(res));
  }, []);

  return (
    <div id="singleProdContainer">
      <div id="singleImgContainer">
        <img src={singleData.image} alt="" />
      </div>

      <div id="singleProdDetails">
        <h3>Title : {singleData.title}</h3>
        <p>Description : {singleData.description}</p>
        <h2>Rs.{singleData.price}</h2>
        <i>Category : {singleData.category}</i>
      </div>
    </div>
  );
};

export default FetchSingleProduct;
