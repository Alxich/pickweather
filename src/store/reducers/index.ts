import { combineReducers } from "redux";

// Reducers

import { weatherReducer } from "./weather";
import { newsReducer } from "./news";

export const rootReducer = combineReducers({
  weather: weatherReducer,
  news: newsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
