import { ReactElement } from "react";
import { WeatherIcon } from "./elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHalf,
  faWind,
  faDroplet,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const WeatherInfo = (): ReactElement => {
  return (
    <div id="weather-info" className="content-weather">
      <div className="main">
        <div className="picture">
          <WeatherIcon thunder />
        </div>
        <div className="container">
          <div className="town">
            <h2>London</h2>
            <div className="time">11:27 PM</div>
          </div>
          <div className="chance">
            <p>Chance of rain 54%</p>
          </div>
          <div className="temp">
            <h3>17.3 °C (63.14 °F)</h3>
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
                icon={faTemperatureHalf}
                style={{ width: "100%", height: "100%", color: "inherit" }}
              />
            </div>
            <div className="container width-auto to-left">
              <h4>Real Feel</h4>
              <p>20 °C (68 °F)</p>
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
              <p>0.2 km/h (0.62 mp/h)</p>
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
              <p>54%</p>
            </div>
          </div>

          <div className="item">
            <div className="fafont-icon big interactive">
              <FontAwesomeIcon
                icon={faSun}
                style={{ width: "100%", height: "100%", color: "inherit" }}
              />
            </div>
            <div className="container width-auto to-left">
              <h4>UV Index</h4>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
