import React from "react";
import { WeatherIcon } from "./elements";

interface types {
  weatherAstro: any;
}

const formatViewDate = (data: any) => {
  const localData = data.toString().trim().split("");

  console.log(localData);

  const dateOfYear = localData.slice(0, 4).join("");
  const dateofMonth = localData.slice(4, 6).join("");
  const dateofDay = localData.slice(6, 8).join("");

  const fixedDate = `${dateofDay}/${dateofMonth}/${dateOfYear}`;

  return fixedDate;
};

const WeatherList = ({ weatherAstro }: types): JSX.Element => {
  const weatherCastAstro = weatherAstro.dataseries.slice(0, 4);

  return (
    <div id="weather-list" className="content-weather">
      {weatherCastAstro.map((item: any, i: any) => {
        return (
          i !== 0 && (
            <div className="item" key={`${item}__${i}`}>
              <div className="picture">
                <WeatherIcon weather={item.weather} />
              </div>
              <div className="container flex-start to-left">
                <div className="date">
                  <h4>{formatViewDate(item.date)}</h4>
                  <h5>{item.weather}</h5>
                </div>
                <p>
                  The avarage temp: {item.temp2m.min}/{item.temp2m.max} °C
                </p>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default WeatherList;
