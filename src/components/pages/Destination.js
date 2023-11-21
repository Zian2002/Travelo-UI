import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import axios from "axios";
import "./Destination.css";

export default function Destination() {
  const api_url = "http://localhost:8084/tour/2";

  const getData = async () => {
    const response = await axios.get(api_url);
    console.log(response, response);
    setData(response.data);
    setTourInfo(response.data.tourInfo);
    const arr = response.data.tourInfo.itinerary.split(".");
    console.log(arr);
    setItinerary(arr);
    setLocation(response.data.tourInfo.location);
  };
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState({});
  const [tourInfo, setTourInfo] = useState({});
  const [itinerary, setItinerary] = useState([]);
  const [location, setLocation] = useState({});

  return (
    <>
      <div className="destination"></div>
      <div className="destination-container">
        <div className="info-wrapper">
          <h2>{tourInfo.name}</h2>
          <p className="tour-desc">{tourInfo.description}</p>

          <h4>Thông tin tour</h4>
          <ul>
            <li className="info-item">
              <span className="info-label">Địa điểm : </span>
              <span className="info-value">{location.province}</span>
            </li>
            <li className="info-item">
              <span className="info-label">Ngày bắt đầu : </span>
              <span className="info-value">{data.startDate}</span>
            </li>
            <li className="info-item">
              <span className="info-label">Giá : </span>
              <span className="info-value">{data.price}</span>
            </li>
            <li className="info-item">
              <span className="info-label">Số vé còn lại : </span>
              <span className="info-value">{data.stock}</span>
            </li>
          </ul>
          <h4>Lịch trình di chuyển</h4>
          {itinerary.map((item, index) => {
            return (
              <p className="itineraryItem" key={index}>
                {item}
              </p>
            );
          })}
        </div>

        <div className="booking-container">
          <div className="booking-wrapper">
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
                    Số lượng vé:
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={data.stock}
                    value={1}
                    name="numberPerson"
                    className="booking-input"
                  />
                  <span className="require">*</span>
                </div>
                <p className="error"></p>
              </div>

              <button className="booking-button" type="submit">
                Đặt ngay
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
