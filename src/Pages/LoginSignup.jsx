import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import loginImg from "../Components/Assets/login.png";

const LoginSignup = () => {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    console.log("Login", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const signup = async () => {
    console.log("Sign Up", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  return (
    <div className="loginsignup">
      <div className="logincontainer">
        <div className="login-image-container">
          <img src={loginImg} alt="" />
        </div>
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state === "Sign Up" ? (
              <input
                name="username"
                value={formData.username}
                onChange={changeHandler}
                type="text"
                placeholder="Your Name"
              />
            ) : (
              <></>
            )}
            <input
              name="email"
              value={formData.email}
              onChange={changeHandler}
              type="email"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={formData.password}
              onChange={changeHandler}
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            onClick={() => {
              state === "Login" ? login() : signup();
            }}
          >
            Continue
          </button>
          <div className="loginsignup-login">
            {state === "Sign Up" ? (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setState("Login");
                  }}
                >
                  Login Here
                </span>
              </p>
            ) : (
              <></>
            )}
            {state === "Login" ? (
              <p>
                Create an account?{" "}
                <span
                  onClick={() => {
                    setState("Sign Up");
                  }}
                >
                  Register Here
                </span>
              </p>
            ) : (
              <></>
            )}

            <div className="loginsignup-agree">
              <input type="checkbox" name="" id="" />{" "}
              <p>
                By continuing, I agree to the terms of use & privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
