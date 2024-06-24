import React, { useEffect, useState } from "react";
import "./NewArrivals.css";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

const NewArrivals = () => {
  const [new_arrivals, setNew_arrivals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://vastra-vila-backend.onrender.com/newcollection"
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setNew_arrivals(data);
      } catch (err) {
        console.error("Failed to fetch new arrivals:", err);
        setError("Failed to fetch new arrivals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="new-arrivals">
      <h1>New Arrivals</h1>
      <hr />
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="collections">
          {new_arrivals.map((item, i) => (
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

export default NewArrivals;
