import axios from "axios";
import { Dispatch } from "redux";
import { weatherAction, WeatherActionTypes } from "../../types/weather";

export const fetchWeather = ({
  latitude,
  longitude,
}: {
  latitude: null | string;
  longitude: null | string;
}) => {
  return async (dispatch: Dispatch<weatherAction>) => {
    try {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER,
      });

      if (latitude && longitude) {
        dispatch({
          type: WeatherActionTypes.SET_WEATHER_CITY,
          payload: {
            latitude: latitude,
            longitude: longitude,
          },
        });

        const responseCivil = await axios.get(
          `https://www.7timer.info/bin/civil.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json&tzshift=0`
        );
        const responseAstro = await axios.get(
          `https://www.7timer.info/bin/civillight.php?lon=${longitude}&lat=${latitude}&ac=0&unit=metric&output=json&tzshift=0`
        );

        dispatch({
          type: WeatherActionTypes.FETCH_WEATHER_CITY_SUCCESS,
          payload: {
            weatherAstro: responseAstro.data,
            weatherCivil: responseCivil.data,
          },
        });
      } else {
        const responseCivil = await axios.get(
          "https://www.7timer.info/bin/civil.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
        );
        const responseAstro = await axios.get(
          "https://www.7timer.info/bin/civillight.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
        );

        dispatch({
          type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
          payload: {
            weatherAstro: responseAstro.data,
            weatherCivil: responseCivil.data,
          },
        });
      }
    } catch (e) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_ERROR,
        payload: "Returned erro while loading the json",
      });
    }
  };
};
