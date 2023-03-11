import React from "react";
import { WeatherIcon } from "./elements";

const WeatherList = (): JSX.Element => {
  return (
    <div id="weather-list" className="content-weather">
      <div className="item">
        <div className="picture">
          <WeatherIcon sun />
        </div>
        <div className="container flex-start to-left">
          <div className="date">
            <h4>Today</h4>
            <h5>Sunny</h5>
          </div>
          <p>The avarage temp: 12/18 °C</p>
        </div>
      </div>
      <div className="item">
        <div className="picture">
          <WeatherIcon sun />
        </div>
        <div className="container flex-start to-left">
          <div className="date">
            <h4>Today</h4>
            <h5>Sunny</h5>
          </div>
          <p>The avarage temp: 12/18 °C</p>
        </div>
      </div>
      <div className="item">
        <div className="picture">
          <WeatherIcon sun />
        </div>
        <div className="container flex-start to-left">
          <div className="date">
            <h4>Today</h4>
            <h5>Sunny</h5>
          </div>
          <p>The avarage temp: 12/18 °C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherList;
