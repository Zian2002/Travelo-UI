import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  console.log(localStorage.getItem("token"));
  const [email, setEmail] = useState("ad");
  const [password, setPassword] = useState("@ad");
  // const [name, setName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  console.log(email, password);
  const [response, setResponse] = useState({});

  const fetchData = async (e) => {
    e.preventDefault();

    try {
      // Request body
      const requestBody = {
        email: email,
        password: password,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      const result = await axios.post(
        "http://localhost:8084/login",
        requestBody,
        { headers }
      );
      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        console.log(result);

        setResponse(result.data);
        window.location.href = "http://localhost:3000/";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-modal__container">
      <div className="form-modal__wrapper">
        <div className="sign-up">
          <img src="/images/img-8.jpg" alt="Camels in the desert"></img>
        </div>
        <div className="sign-up__container">
          <h2>Sign Up</h2>
          <form className="sign-up__form">
            <label>Email</label> <br></br>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="johndoe@gmail.com"
              name="email"
            ></input>
            <br></br>
            <label>Password</label> <br></br>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              name="password"
            ></input>
            <br></br>
            <button
              type="submit"
              className="btn-sign"
              onClick={(e) => {
                fetchData(e);
              }}
            >
              Login
            </button>
          </form>

          <div>
            <p className="have-account">
              Don't have account? <Link to={"/register"}>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
