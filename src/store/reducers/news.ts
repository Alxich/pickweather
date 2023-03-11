import { newsAction, NewsActionTypes, newsState } from "../../types/news";

const initialState: newsState = {
  news: [],
  category: "",
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
        category: "",
        loading: true,
        error: null,
      };

    case NewsActionTypes.FETCH_NEWS_SUCCESS:
      return {
        news: action.payload,
        category: state.category,
        loading: false,
        error: null,
      };

    case NewsActionTypes.FETCH_NEWS_CATEGORY_SUCCESS:
      return {
        news: action.payload,
        category: state.category,
        loading: false,
        error: null,
      };

    case NewsActionTypes.SET_NEWS_CATEGORY:
      return {
        news: [],
        category: action.payload,
        loading: true,
        error: null,
      };

    case NewsActionTypes.FETCH_NEWS_ERROR:
      return {
        news: [],
        category: state.category,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
