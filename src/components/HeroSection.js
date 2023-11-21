import React from "react";

import { useNavigate } from "react-router-dom";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/services";
    navigate(path);
  };

  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>CHUYẾN ĐI CỦA BẠN</h1>
      <p>Còn chờ điều gì nữa?</p>

      <form className="search">
        <div className="search-container">
          <label>Bạn muốn khám phá nơi nào?</label>
          <input
            id="location"
            type="text"
            placeholder="Nhập địa điểm muốn đến..."
            style={{ borderWidth: 1, borderColor: "#333" }}
          />
        </div>
        <div className="row-container">
          <div className="search-container">
            <label>Từ ngày</label>
            <input id="check-in" type="date" />
          </div>
          <div className="search-container">
            <label>Đến ngày</label>
            <input id="check-out" type="date" />
          </div>
        </div>
        <div className="search-container">
          <button className="hero-btn" type="submit" onClick={routeChange}>
            Khám phá ngay
          </button>
        </div>
      </form>
    </div>
  );
}

export default HeroSection;
