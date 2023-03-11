export interface newsState {
  news: any[] | undefined;
  category: null | string;
  loading: boolean;
  error: null | string;
}

export enum NewsActionTypes {
  FETCH_NEWS = "FETCH_NEWS",
  FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
  FETCH_NEWS_CATEGORY_SUCCESS = "FETCH_NEWS_SUCCESS",
  FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR",
  SET_NEWS_CATEGORY = "SET_NEWS_CATEGORY",
}

interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
}

interface FetchNewsSuccesAction {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: [];
}

interface FetchNewsCategorySuccesAction {
  type: NewsActionTypes.FETCH_NEWS_CATEGORY_SUCCESS;
  payload: [];
}

interface SetNewsCategoryAction {
  type: NewsActionTypes.SET_NEWS_CATEGORY;
  payload: string;
}

interface FetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}

export type newsAction =
  | FetchNewsAction
  | FetchNewsSuccesAction
  | FetchNewsCategorySuccesAction
  | FetchNewsErrorAction
  | SetNewsCategoryAction;
