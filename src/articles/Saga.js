import { NewsApi } from "../api/NewsApi";
import {
  FETCH_NEWS_LIST,
  FETCH_SOURCE_LIST,
  UPDATE_SOURCE,
  UPDATE_QUERY,
  UPDATE_PAGE,
  UPDATE_LOADING,
  UPDATE_PAGINATION
} from "./Events";

import { put, call, takeEvery, all, fork, select } from "redux-saga/effects";
import { delay } from "redux-saga";
// Get the current state
export const getState = state => state.reducer.news;

// Fetch the latest news based on the source and query with page no
function* fetchNewsList(action) {
  try {
    const state = yield select(getState);
    const data = yield call(
      NewsApi.getNewsList,
      {},
      { q: state.query, source: state.source, page: state.page }
    );
    const news = data.data.articles || [];
    yield put({ type: FETCH_NEWS_LIST, news });
  } catch (e) {
    console.log("error", e);
  }
}

// Fetch the source list based on the country
function* fetchSourceList(action) {
  try {
    const data = yield call(NewsApi.getSourceList);
    const sources = data.data.sources || [];
    let source = sources[0].id || "";
    yield put({ type: FETCH_SOURCE_LIST, sources });
    yield put({ type: UPDATE_SOURCE, source });
    yield call(fetchNewsList);
  } catch (e) {
    console.log("error", e);
  }
}

// Common method to update the filter and again fetch the news based on the filters
function* updateFilter(action) {
  try {
    yield call(fetchNewsList);
    const loading = false;
    const pagination = true;
    yield put({ type: UPDATE_LOADING, loading });
    yield delay(1000);
    yield put({ type: UPDATE_PAGINATION, pagination });
  } catch (e) {
    console.log("error--", e);
  }
}

export function* watchFilter() {
  yield takeEvery(UPDATE_SOURCE, updateFilter);
  yield takeEvery(UPDATE_QUERY, updateFilter);
  yield takeEvery(UPDATE_PAGE, updateFilter);
}

function* newsSaga() {
  yield all([fork(fetchNewsList), fork(fetchSourceList), fork(watchFilter)]);
}

export default newsSaga;
