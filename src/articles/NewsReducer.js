import * as newsEvents from "./Events";
import _ from "lodash";

const initialState = {
  newsSource: [],
  newsData: [],
  query: "",
  source: "",
  page: 1,
  loading: true,
  pagination: true
};

export function NewsReducer(state = initialState, action) {
  switch (action.type) {
    case newsEvents.FETCH_NEWS_LIST: {
      return _.assign({}, state, {
        newsData: _.uniqBy(_.concat(state.newsData, action.news), "title")
      });
    }
    case newsEvents.EMPTY_NEWS_LIST: {
      return _.assign({}, state, { newsData: [] });
    }
    case newsEvents.FETCH_SOURCE_LIST: {
      return _.assign({}, state, { newsSource: action.sources });
    }
    case newsEvents.EMPTY_SOURCE_LIST: {
      return _.assign({}, state, { newsSource: [] });
    }
    case newsEvents.UPDATE_SOURCE: {
      return _.assign({}, state, { source: action.source, page: action.page });
    }
    case newsEvents.UPDATE_QUERY: {
      return _.assign({}, state, { query: action.query, page: action.page });
    }
    case newsEvents.UPDATE_PAGE: {
      return _.assign({}, state, { page: action.page });
    }
    case newsEvents.UPDATE_LOADING: {
      return _.assign({}, state, { loading: action.loading });
    }
    case newsEvents.UPDATE_PAGINATION: {
      return _.assign({}, state, { pagination: action.pagination });
    }
    default:
      return state;
  }
}
