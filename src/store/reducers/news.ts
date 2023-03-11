import { newsAction, NewsActionTypes, newsState } from "../../types/news";

const initialState: newsState = {
  news: [],
  loading: false,
  error: null,
};

export const newsReducer = (
  state = initialState,
  action: newsAction
): newsState => {
  switch (action.type) {
    case NewsActionTypes.FETCH_NEWS:
      return {
        news: [],
        loading: true,
        error: null,
      };

    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return {
        news: action.payload,
        loading: false,
        error: null,
      };

    case NewsActionTypes.FETCH_NEWS_ERROR:
      return {
        news: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
