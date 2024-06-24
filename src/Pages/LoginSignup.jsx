import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import loginImg from "../Components/Assets/login.png";
import Loader from "../Components/Loader/Loader";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

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
    setLoading(true);
    try {
      const response = await fetch(
        "https://vastra-vila-backend.onrender.com/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.errors);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const signup = async () => {
    console.log("Sign Up", formData);
    setLoading(true);
    try {
      const response = await fetch(
        "https://vastra-vila-backend.onrender.com/signup",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.success) {
        localStorage.setItem("auth-token", data.token);
        window.location.replace("/");
      } else {
        alert(data.errors);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  return (
    <div className="loginsignup">
      {loading && <Loader />}
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
            disabled={!agreed}
          >
            Continue
          </button>
          <div className="loginsignup-login">
            <div className="loginsignup-agree">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                checked={agreed}
                onChange={handleCheckboxChange}
              />{" "}
              <p>
                By continuing, I agree to the terms of use & privacy policy.
              </p>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
