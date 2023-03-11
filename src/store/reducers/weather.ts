import {
  weatherAction,
  WeatherActionTypes,
  weatherState,
} from "../../types/weather";

const initialState: weatherState = {
  weatherAstro: {},
  weatherCivil: {},
  latitude: null,
  longitude: null,
  loading: true,
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
        latitude: state.latitude,
        longitude: state.longitude,
        loading: true,
        error: null,
      };

    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return {
        weatherAstro: action.payload.weatherAstro,
        weatherCivil: action.payload.weatherCivil,
        latitude: state.latitude,
        longitude: state.longitude,
        loading: false,
        error: null,
      };

    case WeatherActionTypes.FETCH_WEATHER_CITY_SUCCESS:
      return {
        weatherAstro: action.payload.weatherAstro,
        weatherCivil: action.payload.weatherCivil,
        latitude: state.latitude,
        longitude: state.longitude,
        loading: false,
        error: null,
      };

    case WeatherActionTypes.FETCH_WEATHER_ERROR:
      return {
        weatherAstro: state.weatherAstro,
        weatherCivil: state.weatherCivil,
        latitude: state.latitude,
        longitude: state.longitude,
        loading: false,
        error: action.payload,
      };

    case WeatherActionTypes.SET_WEATHER_CITY:
      return {
        weatherAstro: state.weatherAstro,
        weatherCivil: state.weatherCivil,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        loading: true,
        error: null,
      };

    default:
      return state;
  }
};
