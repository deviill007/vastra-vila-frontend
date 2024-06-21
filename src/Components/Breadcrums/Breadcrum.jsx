import React from "react";
import "./Breadcrum.css";
import { RiArrowRightSLine } from "react-icons/ri";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <RiArrowRightSLine /> SHOP <RiArrowRightSLine /> {product.category}{" "}
      <RiArrowRightSLine /> {product.name}
    </div>
  );
};

export default Breadcrum;
