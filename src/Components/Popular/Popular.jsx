import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import Loader from "..//Loader/Loader";

const Popular = () => {
  const [data_product, setData_product] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://vastra-vila-backend.onrender.com/popularinwomen"
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setData_product(data);
      } catch (err) {
        console.error("Failed to fetch popular products:", err);
        setError("Failed to fetch popular products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <hr />
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="popular-item">
          {data_product.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Popular;
