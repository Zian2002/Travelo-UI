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
  const images = [
    "http://localhost:8084/image/danang1.png",
    "http://localhost:8084/image/thacbangioc1.png",
    "http://localhost:8084/image/dongnai2.png",
    "http://localhost:8084/image/dalat2.png",
  ];
  const getData = async () => {
    const response = await axios.get(api_url);
    console.log("response", response);
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
                const images = item.tourInfo.images[0];
                return (
                  <CardItem
                    key={index}
                    tourId={item.id}
                    src={images.imageUri}
                    text={item.tourInfo.name}
                    label={item.tourInfo.location.province}
                    path="/services/tour"
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
              {location.slice(2, 6).map((item, index) => {
                return (
                  <li className="cards__item" key={index}>
                    <div className="cards__item__link">
                      <figure
                        data-category={item.province}
                        className="cards__item__pic-wrap"
                      >
                        <img
                          src={images[0]}
                          alt="Travel destination"
                          className="cards__item__img"
                        ></img>
                      </figure>
                      <div className="cards__item__info">
                        <h5 className="cards__item__text">
                          {item.description}
                        </h5>
                      </div>
                    </div>
                  </li>
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
