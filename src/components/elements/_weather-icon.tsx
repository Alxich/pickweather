import React from "react";
import classnames from "classnames";

/*
 * This is element that show weather icon (like rain, sun, cloud)
 * allows you to use it in every place in your site.
 * Just import and choose type of weather from types list
 */

interface types {
  weather?: string | null;
}

const WeatherIcon = ({ weather }: types): JSX.Element => {
  const returnMeIcon = ({ weather }: types) => {
    switch (weather) {
      case "oshower":
        return (
          <>
            <div className="cloud"></div>
            <div className="sun"></div>
            <div className="rain"></div>
          </>
        );
      case "pcloudy":
        return (
          <>
            <div className="cloud"></div>
            <div className="sun"></div>
          </>
        );
      case "clear":
        return (
          <>
            <div className="rays">
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
              <div className="ray"></div>
            </div>
            <div className="sun"></div>
          </>
        );
      case "cloud":
        return (
          <>
            <div className="cloud small-cloud"></div>
            <div className="cloud"></div>
          </>
        );
      case "rain":
        return (
          <>
            <div className="cloud"></div>
            <div className="rain"></div>
          </>
        );
      case "lightrain":
        return (
          <>
            <div className="cloud"></div>
            <div className="rain"></div>
          </>
        );
      case "ts":
        return (
          <>
            <div className="cloud"></div>
            <div className="thunder">
              <div className="bolt"></div>
              <div className="bolt"></div>
            </div>
          </>
        );
      case "tsrain":
        return (
          <>
            <div className="cloud"></div>
            <div className="thunder">
              <div className="bolt"></div>
              <div className="bolt"></div>
            </div>
          </>
        );
      case "snow":
        return (
          <>
            <div className="cloud"></div>
            <div className="snow">
              <div className="flake"></div>
              <div className="flake"></div>
              <div className="flake"></div>
              <div className="flake"></div>
            </div>
          </>
        );
      case "drizzle":
        return (
          <>
            <div className="cloud"></div>
            <div className="drizzle"></div>
          </>
        );
      case "extreme":
        return (
          <div className="extreme text-center">
            <div className="harsh-wind"></div>
            <div className="harsh-wind"></div>
            <div className="harsh-wind"></div>
            <div className="harsh-wind"></div>
            <div className="harsh-wind"></div>
            <div className="harsh-wind"></div>
            <div className="harsh-wind"></div>
          </div>
        );
      default:
        return (
          <>
            <div className="cloud small-cloud"></div>
            <div className="cloud"></div>
          </>
        );
    }
  };

  return (
    <div
      className={classnames("icon-weather", {
        "sun-shower": weather === "pcloudy" || weather === "oshower",
        cloudy: weather === "cloudy",
      })}
    >
      {weather ? (
        returnMeIcon({ weather })
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
