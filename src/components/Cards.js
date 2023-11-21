import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import axios from "axios";

function Cards() {
  const api_url = "http://localhost:8084/tour";
  const getData = async () => {
    const response = await axios.get(api_url);
    console.log(response, response);
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);

  return (
    <div className="cards">
      <h1> Khám phá những tour du lịch nổi bậc </h1>{" "}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {" "}
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
            })}{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Cards;
