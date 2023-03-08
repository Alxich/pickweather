import { ReactElement } from "react";
import classnames from "classnames";

/*
 * This is element that show weather icon (like rain, sun, cloud)
 * allows you to use it in every place in your site.
 * Just import and choose type of weather from types list
 */

interface types {
  sunShower?: boolean;
  sun?: boolean;
  rain?: boolean;
  thunder?: boolean;
  drizzle?: boolean;
  extreme?: boolean;
  snow?: boolean;
  cloud?: boolean;
}

const WeatherIcon = ({
  sunShower,
  sun,
  rain,
  thunder,
  drizzle,
  extreme,
  snow,
  cloud,
}: types): ReactElement => {
  return (
    <div
      className={classnames("icon-weather", {
        "sun-shower": sunShower,
      })}
    >
      {sunShower ? (
        <>
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
        </>
      ) : cloud ? (
        <>
          <div className="cloud small-cloud"></div>
          <div className="cloud"></div>
        </>
      ) : rain ? (
        <>
          <div className="cloud"></div>
          <div className="rain"></div>
        </>
      ) : thunder ? (
        <>
          <div className="cloud"></div>
          <div className="thunder">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </>
      ) : sun ? (
        <>
          <div className="rays">
            <div className="ray"></div>
            <div className="ray"></div>
            <div className="ray"></div>
            <div className="ray"></div>
          </div>
          <div className="sun"></div>
        </>
      ) : drizzle ? (
        <>
          <div className="cloud"></div>
          <div className="drizzle"></div>
        </>
      ) : snow ? (
        <>
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </>
      ) : extreme ? (
        <div className="extreme text-center">
          <div className="harsh-wind"></div>
          <div className="harsh-wind"></div>
          <div className="harsh-wind"></div>
          <div className="harsh-wind"></div>
          <div className="harsh-wind"></div>
          <div className="harsh-wind"></div>
          <div className="harsh-wind"></div>
        </div>
      ) : (
        <>
          <div className="cloud small-cloud"></div>
          <div className="cloud"></div>
        </>
      )}
    </div>
  );
};

export default WeatherIcon;
