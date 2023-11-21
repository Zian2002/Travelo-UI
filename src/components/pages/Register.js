import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="form-modal__container">
      {/* <div className="sign-up">
          <img src="/images/img-8.jpg" alt="Camels in the desert"></img>
        </div> */}
      <div className="form-modal__wrapper">
        <div className="sign-up__container" style={{ padding: "20px" }}>
          <form className="booking-form" action="">
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
                />
                <span className="require">*</span>
              </div>
              <p className="error"></p>
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
                />
                <span className="require">*</span>
              </div>
              <p className="error"></p>
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
                />
                <span className="require">*</span>
              </div>
              <p className="error"></p>
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
                />
                <span className="require"></span>
              </div>
              <p className="error"></p>
            </div>
            <div className="input-wrapper">
              <div className="input-line">
                <label htmlFor="" className="booking-label">
                  Mật khẩu:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Password"
                  className="booking-input"
                />
                <span className="require">*</span>
              </div>
              <p className="error"></p>
            </div>

            <button className="booking-button" type="submit">
              Xác nhận
            </button>
          </form>

          <div>
            <p className="have-account">
              Have an account? <Link to={"/sign-up"}>Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
