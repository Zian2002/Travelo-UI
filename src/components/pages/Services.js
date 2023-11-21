import React, { useEffect, useState } from "react";
import CardItem from "../CardItem";
import Footer from "../Footer";

import "../../App.css";
import "../Cards.css";
import "./Services.css";
import axios from "axios";

export default function Services() {
  const api_url = "http://localhost:8084/tour";
  const location_api = "http://localhost:8084/location";
  const getData = async () => {
    const response = await axios.get(api_url);
    console.log(response, response);
    setData(response.data);

    const locationResponse = await axios.get(location_api);
    setLocation(locationResponse.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);
  const [location, setLocation] = useState([]);

  return (
    <>
      <h1 className="services">SERVICES</h1>
      <section className="heading">
        <h2>Các tour du lịch thịnh hành</h2>
        <div className="services-container">
          <div className="services-wrapper">
            <ul className="services-items">
              {data.map((item, index) => {
                return (
                  <CardItem
                    key={index}
                    src="img-9.jpg"
                    text={item.tourInfo.name}
                    label={item.tourInfo.location.province}
                    path="/services/activity"
                  ></CardItem>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="heading">
        <h2>Khám phá các điểm đến nổi bậc</h2>
        <div className="services-container">
          <div className="services-wrapper">
            <ul className="services-items">
              {location.map((item, index) => {
                return (
                  <CardItem
                    key={index}
                    src="destination-1.jpg"
                    text={item.description}
                    label={item.province}
                    path="/services/activity"
                  ></CardItem>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
