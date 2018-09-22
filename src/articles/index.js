import { connect } from "react-redux";
import MainComponent from "./MainComponent";

const mapStateToProps = state => ({
  news: state.reducer.news.newsData,
  source: state.reducer.news.newsSource,
  page: state.reducer.news.page,
  loading: state.reducer.news.loading,
  pagination: state.reducer.news.pagination
});

const mapDispatchToProps = dispatch => {
  return {
    fetchSourceList: () => dispatch({ type: "FETCH_SOURCE_LIST" }),
    emptyNewsList: news => dispatch({ type: "EMPTY_NEWS_LIST", news }),
    updateSource: (source, page) =>
      dispatch({ type: "UPDATE_SOURCE", source, page }),
    updateQuery: (query, page) =>
      dispatch({ type: "UPDATE_QUERY", query, page }),
    updatePage: page => dispatch({ type: "UPDATE_PAGE", page }),
    updateLoading: loading => dispatch({ type: "UPDATE_LOADING", loading }),
    updatePagination: pagination =>
      dispatch({ type: "UPDATE_PAGINATION", pagination })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
