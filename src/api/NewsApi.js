import { HttpClient } from './HttpClient';

const BASE_URL = HttpClient.baseUrl;
const API_KEY = HttpClient.apiKey;
const SOURCE_LIST = `${HttpClient.sourceUrl}&apiKey=${API_KEY}`

// For filtering create url based on the search and source
const getFilter = (q = "", source = "bbc-news", page = 1) => {
	let url = `${BASE_URL}q=${q}&sources=${source}&page=${page}&apiKey=${API_KEY}`
	console.log(url)
	return `${BASE_URL}q=${q}&sources=${source}&apiKey=${API_KEY}`
}

const getNewsList = (params = {}, config = {}) => {
	return HttpClient.get(getFilter(config.q || "", config.source || "", config.page || 1), params, config)
}

// Fetch the list of source available for specific country
const getSourceList = (params = {}, config = {}) => {
	console.log("source url", SOURCE_LIST)
	return HttpClient.get(SOURCE_LIST, params, config)
}

const NewsApi = {
	getNewsList,
	getSourceList
}

export { NewsApi }