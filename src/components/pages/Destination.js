import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import axios from "axios";
import "./Destination.css";
import { useParams } from "react-router-dom";

export default function Destination() {
  const { id } = useParams();

  const getData = async () => {
    const response = await axios.get("http://localhost:8084/tour/" + id);
    console.log("response", response);
    setData(response.data);
    setTourInfo(await response.data.tourInfo);
    setImages(response.data.tourInfo.images);
    const arr = response.data.tourInfo.itinerary.split(".");
    // console.log(arr);
    setItinerary(arr);
    setLocation(response.data.tourInfo.location);
  };
  useEffect(() => {
    getData();
  }, []);

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const getUserData = async () => {
    try {
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }

      const result = await axios.get(
        "http://localhost:8084/customer/detail-person"
      );

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

  const booking = async () => {
    if (!validate()) return false;

    try {
      const response = await axios.post("http://localhost:8084/booking", {
        name: name,
        email: email,
        tourId: id,
        numberPerson: numberPerson,
        address: address,
        phone: phone,
      });
      alert(response.data.message);
      if (response.data.status === 200) {
        setName("");
        setEmail("");
        setAddress("");
        setPhone("");
        setNumberPerson(1);
        setErrEmail("");
        setErrName("");
        setErrNumber("");
        setErrPhone("");
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const validate = () => {
    let rs = true;

    if (!name) {
      setErrName("Tên bắt buộc nhập");
      rs = false;
    }else setErrName("")
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
      setErrEmail("Sai định dạng Email");
      rs = false;
    }else setErrEmail("")
    if (!phone) {
      setErrPhone("SDT là bắt buộc");
      rs = false;
    }else setErrPhone("")

    if (numberPerson > data.numberPerson) {
      setErrNumber("Số lượng vé vướt quá số lượng tồn");
      rs = false;
    } else setErrNumber("")

    return rs;
  };

  const [data, setData] = useState({});
  const [tourInfo, setTourInfo] = useState({});
  const [images, setImages] = useState([]);
  const [itinerary, setItinerary] = useState([]);
  const [location, setLocation] = useState({});

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [numberPerson, setNumberPerson] = useState(1);

  const [errEmail, setErrEmail] = useState("");
  const [errName, setErrName] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errNumber, setErrNumber] = useState("");

  return (
    <div>
      {images.length > 0 && (
        <div
          className="destination"
          style={{
            backgroundImage: `url(${data.tourInfo.images[0].imageUri})`,
          }}
        ></div>
      )}
      <div className="destination-container">
        <div className="info-wrapper">
          <h2>{tourInfo.name}</h2>
          <p className="tour-desc">{tourInfo.description}</p>
          <div
            className="media"
            style={{
              width: "100%",
              height: "250px",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {images.length > 0 && (
              <img
                src={images[1].imageUri}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
            )}
          </div>
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
          <div className="media" style={{ width: "100%", height: "250px" }}>
            {images.length > 0 && (
              <img
                src={`${tourInfo.images[2].imageUri}`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 10,
                }}
              />
            )}
          </div>
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
                    Số lượng vé:
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={data.stock}
                    name="numberPerson"
                    className="booking-input"
                    value={numberPerson}
                    onChange={(e) => {
                      setNumberPerson(Number(e.target.value));
                    }}
                  />
                  <span className="require">*</span>
                </div>
                <p className="error">{errNumber}</p>
              </div>

              <button
                className="booking-button"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(email);
                  booking();
                }}
              >
                Đặt ngay
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
