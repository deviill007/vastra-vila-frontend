import React, { useEffect, useState } from "react";
import "./NewArrivals.css";
import Item from "../Item/Item";

const NewArrivals = () => {
  const [new_arrivals, setNew_arrivals] = useState([]);

  useEffect(() => {
    fetch(`${process.env.API_BASE_URL}/newcollection`)
      .then((response) => response.json())
      .then((data) => setNew_arrivals(data));
  }, []);
  return (
    <div className="new-arrivals">
      <h1>New Arrivals</h1>
      <hr />
      <div className="collections">
        {new_arrivals.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
