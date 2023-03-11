import axios from "axios";
import { Dispatch } from "redux";
import { newsAction, NewsActionTypes } from "../../types/news";

export const fetchNews = ({ category }: { category: string | null }) => {
  return async (dispatch: Dispatch<newsAction>) => {
    try {
      dispatch({
        type: NewsActionTypes.FETCH_NEWS,
      });

      if (category) {
        dispatch({
          type: NewsActionTypes.SET_NEWS_CATEGORY,
          payload: category,
        });

        const response = await axios.get(
          `http://inshorts.deta.dev/news?category=${category}`
        );

        dispatch({
          type: NewsActionTypes.FETCH_NEWS_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: NewsActionTypes.SET_NEWS_CATEGORY,
          payload: "all",
        });

        const response = await axios.get(
          "http://inshorts.deta.dev/news?category=all"
        );

        dispatch({
          type: NewsActionTypes.FETCH_NEWS_SUCCESS,
          payload: response.data.data,
        });
      }
    } catch (e) {
      dispatch({
        type: NewsActionTypes.FETCH_NEWS_ERROR,
        payload: "Returned error while loading the json :(",
      });
    }
  };
};
