import React from "react";
import { WeatherIcon } from "./elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
  faCompass,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

interface types {
  name: string | null;
  weatherAstro: any;
  weatherCivil: any;
}

const WeatherInfo = ({
  name,
  weatherAstro,
  weatherCivil,
}: types): JSX.Element => {
  const { weather } = weatherAstro.dataseries[0];
  const {
    rh2m,
    temp2m: currentTemp,
    wind10m,
    cloudcover,
  } = weatherCivil.dataseries[0];

  // Converting to usual temps

  const currentTempCelcius = currentTemp;
  const currentTempFar = ((currentTempCelcius * 9) / 5 + 32).toFixed(2);

  // Converting cloudcover to percents

  const cloudcoverPrecentage = () => {
    // m/s
    switch (cloudcover) {
      case 1:
        return 6;

      case 2:
        return 19;

      case 3:
        return 31;

      case 4:
        return 44;

      case 5:
        return 56;

      case 6:
        return 69;

      case 7:
        return 81;

      case 8:
        return 84;

      case 9:
        return 100;

      default:
        return 6;
    }
  };

  // Converting wind to usual km/h

  const windSpeedMs = () => {
    // m/s
    switch (wind10m.speed) {
      case 1:
        return 3;

      case 2:
        return 3.4;

      case 3:
        return 8;

      case 4:
        return 10.8;

      case 5:
        return 17.2;

      case 6:
        return 24.5;

      case 7:
        return 32.6;

      case 8:
        return 42.3;

      default:
        return 3;
    }
  };

  const windSpeedKms = (windSpeedMs() * 3.6).toFixed(2);
  const windSpeedMlh = (Number(windSpeedKms) / 1.609).toFixed(2);

  // Convert time to AM/PM format

  const formatAMPM = (date: any) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let strTime = hours + ":" + minutes + " " + ampm;

    return strTime;
  };

  const currentTime = formatAMPM(new Date());

  return (
    <div id="weather-info" className="content-weather">
      <div className="main">
        <div className="picture">
          <WeatherIcon weather={weather} />
        </div>
        <div className="container">
          <div className="town">
            <h2>{name}</h2>
            <div className="time">{currentTime}</div>
          </div>
          <div className="chance">
            <p>Chance of rain {rh2m}</p>
          </div>
          <div className="temp">
            <h3>
              The 2m Temperature: {currentTempCelcius}°C ({currentTempFar} °F)
            </h3>
          </div>
        </div>
      </div>
      <div className="additional">
        <div className="title">
          <h3>Air Conditions</h3>
        </div>
        <div className="container flex-row flex-wrap flex-space flex-start">
          <div className="item">
            <div className="fafont-icon big interactive">
              <FontAwesomeIcon
                icon={faCloud}
                style={{ width: "100%", height: "100%", color: "inherit" }}
              />
            </div>
            <div className="container width-auto to-left">
              <h4>Cloud Cover</h4>
              <p>{cloudcoverPrecentage()}%</p>
            </div>
          </div>

          <div className="item">
            <div className="fafont-icon big interactive">
              <FontAwesomeIcon
                icon={faWind}
                style={{ width: "100%", height: "100%", color: "inherit" }}
              />
            </div>
            <div className="container width-auto to-left">
              <h4>Wind outside</h4>
              <p>
                {windSpeedKms} km/h ({windSpeedMlh} mp/h)
              </p>
            </div>
          </div>

          <div className="item">
            <div className="fafont-icon big interactive">
              <FontAwesomeIcon
                icon={faDroplet}
                style={{ width: "100%", height: "100%", color: "inherit" }}
              />
            </div>
            <div className="container width-auto to-left">
              <h4>Chance of rain</h4>
              <p>{rh2m}</p>
            </div>
          </div>

          <div className="item">
            <div className="fafont-icon big interactive">
              <FontAwesomeIcon
                icon={faCompass}
                style={{ width: "100%", height: "100%", color: "inherit" }}
              />
            </div>
            <div className="container width-auto to-left">
              <h4>Wind direction</h4>
              <p>{wind10m.direction}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
