import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.jpg";

const Offers = () => {
  return (
    <div className="offers">
      <img src={exclusive_image} alt="" />
      <button className="button-64" role="button">
        <span className="text">Check Now</span>
      </button>
    </div>
  );
};

export default Offers;
