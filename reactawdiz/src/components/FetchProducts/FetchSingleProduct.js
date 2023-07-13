import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FetchSingleProduct = () => {
  const [singleData, setSingleData] = useState([]);
  const [singleProd, setSingleProd] = useState({});
  const { id } = useParams();

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setSingleData(res));
  // }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((res) => setSingleData(res));
  }, []);

  useEffect(() => {
    if (id && singleData.length) {
      const findProduct = singleData.find((elem) => elem.id === parseInt(id));
      setSingleProd(findProduct);
    }
  }, [id, singleData]);

  // console.log(singleProd);

  return (
    <div id="singleProdContainer">
      <div id="singleImgContainer">
        <img src={singleProd.image} alt="" />
      </div>

      <div id="singleProdDetails">
        <h3>Title : {singleProd.title}</h3>
        <p>Description : {singleProd.description}</p>
        <h2>Rs.{singleProd.price}</h2>
        <i>Category : {singleProd.category}</i>
      </div>
    </div>
  );
};

export default FetchSingleProduct;
