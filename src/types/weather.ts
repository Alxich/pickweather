export interface weatherState {
  weatherAstro: {} | undefined;
  weatherCivil: {} | undefined;
  loading: boolean;
  error: null | string;
}

export enum WeatherActionTypes {
  FETCH_WEATHER = "FETCH_WEATHER",
  FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS",
  FETCH_WEATHER_ERROR = "FETCH_WEATHER_ERROR",
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

interface FetchWeatherErrorAction {
  type: WeatherActionTypes.FETCH_WEATHER_ERROR;
  payload: string;
}

export type weatherAction =
  | FetchWeatherAction
  | FetchWeatherSuccesAction
  | FetchWeatherErrorAction;
