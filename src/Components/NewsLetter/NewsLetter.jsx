import React from "react";
import "./NewsLetter.css";
import logo from "../Assets/logo _big.png";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="right">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated.</p>
        <div className="holder">
          <input type="email" placeholder="Your Email ID" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
