import {combineReducers} from 'redux';
import {NewsReducer} from '../articles/NewsReducer';
const reducer = combineReducers({
  news: NewsReducer
})
export default {
  reducer
};