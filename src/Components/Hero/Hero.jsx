import React, { useState, useEffect } from "react";
import "./Hero.css";
import hero from "../Assets/hero_image2.jpg";
import hero2 from "../Assets/hero_image1.jpg";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  const [currentHero, setCurrentHero] = useState(hero);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setCurrentHero(hero2);
      } else {
        setCurrentHero(hero2);
      }
    };

    // Set initial image based on window width
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero">
      <img src={currentHero} className="heroImg" alt="" />
      <button className="button-64" role="button">
        <span className="text">Latest Collection</span>
      </button>
    </div>
  );
};

export default Hero;
