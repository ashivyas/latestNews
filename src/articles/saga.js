import { NewsApi } from "../api/newsApi";
import {
  FETCH_NEWS_LIST,
  UPDATE_QUERY,
  UPDATE_PAGE,
  UPDATE_LOADING,
  UPDATE_PAGINATION
} from './events'

import {put,call,takeEvery,all,fork,select } from 'redux-saga/effects'
import {delay} from 'redux-saga';
// Get the current state
export const getState = (state) => state.reducer.news

// Fetch the latest news based on the source and query with page no
function* fetchNewsList (action) {
  try {
    const state = yield select(getState)
		const data = yield call(NewsApi.getNewsList,{},{q: state.query,source: state.source, page: state.page})
    const news = data.data.articles || []
    yield put({ type: FETCH_NEWS_LIST, news})
   } catch (e) {
    console.log("error",e)
  }
}


// Common method to update the filter and again fetch the news based on the filters
function* updateFilter(action){
  try{
    yield call(fetchNewsList)
    const loading = false
    const pagination = true
    yield put({ type: UPDATE_LOADING, loading})
    yield delay(1000);
    yield put({ type: UPDATE_PAGINATION, pagination})
  }catch(e){
    console.log("error--",e)
  }
}

export function* watchFilter() {
  yield takeEvery(UPDATE_QUERY, updateFilter);
  yield takeEvery(UPDATE_PAGE, updateFilter);
}

function* newsSaga () {
  yield all([
    fork(fetchNewsList),
    fork(watchFilter)
  ]);
}

export default newsSaga
