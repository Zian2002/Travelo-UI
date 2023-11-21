import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="form-modal__container">
      <div className="form-modal__wrapper">
        <div className="sign-up">
          <img src="/images/img-8.jpg" alt="Camels in the desert"></img>
        </div>
        <div className="sign-up__container">
          <h2>Sign Up</h2>
          <form className="sign-up__form" action="/">
            <label>Email</label> <br></br>
            <input type="text" placeholder="johndoe@gmail.com"></input>
            <br></br>
            <label>Password</label> <br></br>
            <input type="password" placeholder="password"></input>
            <br></br>
            <button type="submit" className="btn-sign">
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
