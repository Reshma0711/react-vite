import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productid } = useParams();
  const [productData, setProductData] = useState({});

  

  useEffect(() => {
    fetchData();
  }, [productid]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productid}`
      );
      if (response.status === 200) {
        setProductData(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Product Detail Screen</h3>
      {Object.keys(productData).length > 0 && (
        <>
          <h2>{productData.title}</h2>
          <img src={productData.image} alt={productData.title} height="100px" />
          <p>{productData.description}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
