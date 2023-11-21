import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import axios from "axios";

function Navbar() {
  const [click, setClick] = useState(false);
  const [login, setLogin] = useState(false);
  const [token, seToken] = useState(localStorage.getItem("token") || "");
  const [email, setEmail] = useState();
  const [user, setUser] = useState({});
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // console.log("token", localStorage.getItem("token"));
  const getUserData = async () => {
    try {
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } else {
        setLogin(false);
      }

      const result = await axios.get(
        "http://localhost:8084/customer/detail-person"
      );

      setUser(result.data);
      setLogin(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRAVELO <i className="fab fa-gripfire"></i>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dịch vụ
              </Link>
            </li>
          </ul>
          {/* this is the children of Button component that has a buttonStyle */}
          {!login ? (
            <Button buttonStyle="btn--outline">Sign Up</Button>
          ) : (
            <div>
              <Link
                style={{
                  color: "#fff",
                  fontSize: 17,
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                to={"/user"}
              >
                {user.email}
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
