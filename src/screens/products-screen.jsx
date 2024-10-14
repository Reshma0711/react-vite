import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Productscreen = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        setProduct(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>List Of Products</h3>
      {product.length > 0 ? (
        product.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <h4>{item.title}</h4>
            <Link to={`/products/${item.id}`}>
              <Button style={{ backgroundColor: "black", color: "white" }}>
                View Product
              </Button>
            </Link>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default Productscreen;
