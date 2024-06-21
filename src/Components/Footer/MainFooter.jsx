import React from "react";
import "./MainFooter.css";
import logo from "../Assets/logo.png";

const MainFooter = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="main-logo">
          <img src={logo} alt="" />
          <p>Sardarshahar, Jaipur, Rajasthan(India) </p>
        </div>
        <div className="socials">
          <h3>Social</h3>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Linkedin</p>
          <p>Instagram</p>
        </div>
        <div className="privacy">
          <h3>Privacy</h3>
          <p>Cookies</p>
          <p>Terms & Conditions</p>
          <p>Data Safty</p>
          <p>Privacy Policy</p>
        </div>
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p>Email</p>
          <p>Phone</p>
          <p>Register a complaint</p>
          <p>Downloads & API</p>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright Reserved 2024 by VastraVila.</p>
    </div>
  );
};

export default MainFooter;
