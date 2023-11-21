import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const User = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState({});
  const [bookings, setBookings] = useState([]);

  const getUserData = async () => {
    try {
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }

      const result = await axios.get(
        "http://localhost:8084/customer/detail-person"
      );

      setUser(result.data);
      setBookings(result.data.bookings);
      console.log(result.data);
      setName(result.data.name);
      setEmail(result.data.email);
      setPhone(result.data.phone);
      setAddress(result.data.address);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // const [tour, setTour] = useState({});
  const [email, setEmail] = useState(user.email || "");
  const [name, setName] = useState(user.name || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [address, setAddress] = useState(user.address || "");

  return (
    <div style={{ display: "flex", padding: "20px", position: "relative" }}>
      <Link
        to={"/sign-in"}
        onClick={() => {
          localStorage.setItem("token", "");
        }}
        style={{ position: "absolute", top: 20, right: 20 }}
      >
        <div style={{ color: "#000" }}>Đăng xuất</div>
      </Link>
      <div className="bookings" style={{ width: "65%", marginRight: 20 }}>
        <div className="booking">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "66px",
            }}
          >
            <thead>
              <tr
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "left",
                }}
              >
                <th>Tên tour</th>
                <th>Ngày đặt</th>
                <th>Ngày khởi hành</th>
                <th>Số lượng người</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                    }}
                  >
                    <td>{item.tour.tourInfo.name}</td>
                    <td>{1}</td>
                    <td>{item.tour.startDate.slice(0, 10)}</td>
                    <td>{item.numberPerson}</td>
                    <td>{item.totalPrice}</td>
                    <td>
                      {item.status === "UNPAID"
                        ? "Chưa thanh toán"
                        : item.status === "PAID"
                        ? "Đã thanh toán"
                        : item.status === "NEW"
                        ? "Đặt mới"
                        : item.status === "DONE"
                        ? "Hoàn thành"
                        : "Đã hủy"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div>
          <p>Tên tour: Bac Lieu Trong Thanh</p>
          <p>Ngày đặt tour: 2023-01-02 </p>
          <p>Ngày khởi hành: 2023-01-02</p>
          <p>Số lượng người: 10</p>
          <p>Tổng tiền: 14000000</p>
          <p>Trạng thái: 1</p>
        </div> */}
      <div
        className="info"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="form-modal__container">
          <div className="form-modal__wrapper">
            <div className="sign-up__container" style={{ padding: "20px" }}>
              <form className="booking-form" action="">
                <h1 className="booking-title">Thông tin đặt tour</h1>
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
                      value={email}
                      onChange={() => {
                        setEmail(email);
                      }}
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
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
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
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                    <span className="require"></span>
                  </div>
                  <p className="error"></p>
                </div>

                {/* <button
                  className="booking-button"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    // console.log(email);
                    // booking();
                  }}
                >
                  Cập nhật
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
