import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../CardItem";

const User = () => {
  const tour_url = "http://localhost:8084/tour/1";
  const user_url = "http://localhost:8084/user/";
  const getData = async () => {
    const response = await axios.get(tour_url);
    console.log(response, response);
    setTour(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const [tour, setTour] = useState({});
  const [user, setUser] = useState([]);

  return (
    <div style={{ display: "flex" }}>
      <div className="bookings">
          <div className="booking"></div>


        {/* <div>
          <p>Tên tour: Bac Lieu Trong Thanh</p>
          <p>Ngày đặt tour: 2023-01-02 </p>
          <p>Ngày khởi hành: 2023-01-02</p>
          <p>Số lượng người: 10</p>
          <p>Tổng tiền: 14000000</p>
          <p>Trạng thái: 1</p>
        </div> */}
      </div>
      <div
        className="info"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="form-modal__container">
          <div className="form-modal__wrapper">
            <div className="sign-up__container" style={{ padding: "20px" }}>
              <form className="booking-form" action="">
                <h1 className="booking-title">Thông tin khách hàng</h1>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
