import {
  weatherAction,
  WeatherActionTypes,
  weatherState,
} from "../../types/weather";

const initialState: weatherState = {
  weatherAstro: {},
  weatherCivil: {},
  loading: false,
  error: null,
};

export const weatherReducer = (
  state = initialState,
  action: weatherAction
): weatherState => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER:
      return {
        weatherAstro: {},
        weatherCivil: {},
        loading: true,
        error: null,
      };

    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        weatherAstro: action.payload.weatherAstro,
        weatherCivil: action.payload.weatherCivil,
        loading: false,
        error: null,
      };

    case WeatherActionTypes.FETCH_WEATHER_ERROR:
      return {
        weatherAstro: {},
        weatherCivil: {},
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
