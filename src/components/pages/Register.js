import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [errEmail, setErrEmail] = useState("");
  const [errName, setErrName] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const validate = () => {
    let rs = true;

    if (!name) {
      setErrName("Tên bắt buộc nhập");
      rs = false;
    } else setErrName("");
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
      setErrEmail("Sai định dạng Email");
      rs = false;
    } else setErrEmail("");
    if (!phone) {
      setErrPhone("SDT là bắt buộc");
      rs = false;
    } else setErrPhone("");

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
      setErrPassword("Mật khẩu cần chữ thường, chữ hoa số và ít nhất 8 ký tự");
      rs = false;
    } else setErrPassword("");

    return rs;
  };

  const register = async () => {
    if (!validate()) return false;
    try {
      const response = await axios.post("http://localhost:8084/register", {
        email,
        name,
        phone,
        address,
        password,
      });
      console.log(response);
      alert(response.data.message);
      if (response.data.status === 200) {
        setName("");
        setEmail("");
        setAddress("");
        setPhone("");
        setPassword("");
        setErrEmail("");
        setErrName("");
        setErrPassword("");
        setErrPhone("");
      }
      window.location("http://localhost:3000/sign-in");
    } catch (e) {}
  };

  return (
    <div className="form-modal__container">
      {/* <div className="sign-up">
          <img src="/images/img-8.jpg" alt="Camels in the desert"></img>
        </div> */}
      <div className="form-modal__wrapper">
        <div className="sign-up__container" style={{ padding: "20px" }}>
          <form
            className="booking-form"
            action="http://localhost:8084/api/register"
          >
            <h1 className="booking-title">Đăng ký</h1>
            <div className="input-wrapper">
              <div className="input-line">
                <label htmlFor="" className="booking-label">
                  Tên khách hàng:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  className="booking-input"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <span className="require">*</span>
              </div>
              <p className="error">{errName}</p>
            </div>
            <div className="input-wrapper">
              <div className="input-line">
                <label htmlFor="" className="booking-label">
                  Địa chỉ email:
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Địa chỉ email"
                  className="booking-input"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <span className="require">*</span>
              </div>
              <p className="error">{errEmail}</p>
            </div>
            <div className="input-wrapper">
              <div className="input-line">
                <label htmlFor="" className="booking-label">
                  Số điện thoại:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Số điện thoại"
                  className="booking-input"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <span className="require">*</span>
              </div>
              <p className="error">{errPhone}</p>
            </div>
            <div className="input-wrapper">
              <div className="input-line">
                <label htmlFor="" className="booking-label">
                  Địa chỉ:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Địa chỉ: "
                  className="booking-input"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <span className="require"></span>
              </div>
              <p className="error"></p>
            </div>
            <div className="input-wrapper">
              <div className="input-line">
                <label htmlFor="" className="booking-label">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  className="booking-input"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span className="require">*</span>
              </div>
              <p className="error">{errPassword}</p>
            </div>

            <button
              className="booking-button"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                register();
              }}
            >
              Xác nhận
            </button>
          </form>

          <div>
            <p className="have-account">
              Have an account? <Link to={"/sign-in"}>Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
