import axios from "axios";
import { Dispatch } from "redux";
import { newsAction, NewsActionTypes } from "../../types/news";

export const fetchNews = () => {
  return async (dispatch: Dispatch<newsAction>) => {
    try {
      dispatch({
        type: NewsActionTypes.FETCH_NEWS,
      });

      const response = await axios.get(
        "https://inshorts.deta.dev/news?category=science"
      );

      dispatch({
        type: NewsActionTypes.FETCH_NEWS_SUCCESS,
        payload: response.data.data,
      });
    } catch (e) {
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_ERROR,
        payload: "Returned error while loading the json :(",
      });
    }
  };
};
