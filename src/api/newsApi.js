const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=id';
const API_KEY = '158e26b3997947f496bec731c9476c20';

const getNewsList = (params={}, config={}) => {
	return HttpClient.get(getFilter(config.q || "",config.source || "",config.page||1), params, config)
}

const NewsApi = {
	getNewsList
}

export {NewsApi}