export interface weatherState {
  weatherAstro: {} | undefined;
  weatherCivil: {} | undefined;
  latitude: null | string;
  longitude: null | string;
  loading: boolean;
  error: null | string;
}

export enum WeatherActionTypes {
  FETCH_WEATHER = "FETCH_WEATHER",
  FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_CITY_SUCCESS = "FETCH_WEATHER_CITY_SUCCESS",
  FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR",
  SET_WEATHER_CITY = "SET_WEATHER_CITY",
}

interface FetchWeatherAction {
  type: WeatherActionTypes.FETCH_WEATHER;
}

interface FetchWeatherSuccesAction {
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS;
  payload: {
    weatherAstro: {};
    weatherCivil: {};
  };
}

interface FetchWeatherCitySuccesAction {
  type: WeatherActionTypes.FETCH_WEATHER_CITY_SUCCESS;
  payload: {
    weatherAstro: {};
    weatherCivil: {};
  };
}

interface FetchWeatherErrorAction {
  type: WeatherActionTypes.FETCH_WEATHER_ERROR;
  payload: string;
}

interface SetWeatherCategoryAction {
  type: WeatherActionTypes.SET_WEATHER_CITY;
  payload: {
    latitude: string;
    longitude: string;
  };
}

export type weatherAction =
  | FetchWeatherAction
  | FetchWeatherSuccesAction
  | FetchWeatherErrorAction
  | FetchWeatherCitySuccesAction
  | SetWeatherCategoryAction;
