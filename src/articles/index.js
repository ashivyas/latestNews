import { connect } from 'react-redux'
import MainComponent from './mainComponent';

const mapStateToProps = state => ({
	news: state.reducer.news.newsData,
	page: state.reducer.news.page,
  loading: state.reducer.news.loading,
  pagination: state.reducer.news.pagination
});

const mapDispatchToProps =dispatch => {
	return {
    emptyNewsList: (news) => dispatch({ type: "EMPTY_NEWS_LIST", news}),
    updateQuery: (query, page)=> dispatch({type: "UPDATE_QUERY",query, page}),
    updatePage: (page)=> dispatch({type: "UPDATE_PAGE", page}),
    updateLoading: (loading) => dispatch({type: "UPDATE_LOADING", loading}),
    updatePagination: (pagination) => dispatch({type: "UPDATE_PAGINATION", pagination}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);