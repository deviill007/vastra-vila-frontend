import React from "react";
import "./Footer.css";
import quote_image from "../Assets/quote_image.jpeg";
import { FaAmazon, FaApple, FaLinkedinIn } from "react-icons/fa";
import { SiUber } from "react-icons/si";
import { SiSamsung } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="quote">
        <div className="quote-text">
          <p>
            <span>"</span>Fashion is not necessarily about labels. It’s not
            about brands. It’s about something else that comes from within you.{" "}
            <span>"</span>
          </p>
        </div>
        <div className="quote-image">
          <img src={quote_image} alt="" />
          <h2>Ralph Lauren</h2>
        </div>
      </div>
      <div className="trust-us">
        <p>
          <span>Still Not convinced? Look who trust us</span>
        </p>
        <div className="logo-trust">
          <FaAmazon className="img" />
          <SiUber className="img" />
          <SiSamsung className="img" />
          <FaApple className="img" />
          <FaLinkedinIn className="img" />
        </div>
        <button>Shop with us</button>
      </div>
    </div>
  );
};

export default Footer;
