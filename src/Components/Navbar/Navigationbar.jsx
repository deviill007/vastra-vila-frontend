import React, { useContext, useState, useEffect, useRef } from "react";
import "./Navigationbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { RiMenuFill } from "react-icons/ri";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [buttonClass, setButtonClass] = useState("button-64");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const menu_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setButtonClass("button-65");
      } else {
        setButtonClass("button-64");
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <RiMenuFill onClick={menu_toggle} className="nav-menu-dropdown" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none", color: "#333" }}>
            Men
          </Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none", color: "#333" }}>
            Women
          </Link>
          {menu === "womens" ? <hr /> : null}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none", color: "#333" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            className={buttonClass}
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/login");
            }}
          >
            <span className="text">Log out</span>
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className={buttonClass}>
              <span className="text">Login</span>
            </button>
          </Link>
        )}

        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
