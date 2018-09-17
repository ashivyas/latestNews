import {combineReducers} from 'redux';
import {NewsReducer} from '../articles/newsReducer';
const reducer = combineReducers({
  news: NewsReducer
})
export default {
  reducer
};