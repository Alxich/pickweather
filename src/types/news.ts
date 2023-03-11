export interface newsState {
  news: any[] | undefined;
  loading: boolean;
  error: null | string;
}

export enum NewsActionTypes {
  FETCH_NEWS = "FETCH_NEWS",
  FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS",
  FETCH_NEWS_ERROR = "FETCH_NEWS_ERROR",
}

interface FetchNewsAction {
  type: NewsActionTypes.FETCH_NEWS;
}

interface FetchNewsSuccesAction {
  type: NewsActionTypes.FETCH_NEWS_SUCCESS;
  payload: [];
}

interface FetchNewsErrorAction {
  type: NewsActionTypes.FETCH_NEWS_ERROR;
  payload: string;
}

export type newsAction =
  | FetchNewsAction
  | FetchNewsSuccesAction
  | FetchNewsErrorAction;
