import { useEffect, useState } from "react";
import axios from "axios";

const JewelleryScreen = () => {
  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      if (response.status === 200) {
        setData1(response.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Jewellery Products</h1>
      <div className="jewellery-grid">
        {data1.map((item, index) => (
          <div key={index} className="jewellery-item">
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "150px", height: "150px" }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>
              <strong>Price:</strong> ${item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelleryScreen;
