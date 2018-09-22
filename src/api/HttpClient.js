import axios from 'axios'


//Create a Http Client using Axios. Further modifications in this layer can be done later like Authorization.

const baseUrl = 'https://newsapi.org/v2/top-headlines?';
const apiKey = '158e26b3997947f496bec731c9476c20';
const sourceUrl = 'https://newsapi.org/v2/sources?country=in'

const post = (url = '', data = '', config = {}) => {
  return axios.post(url, data, config)
}

const get = (url = '', data = '', config = {}) => {
  config.params = data;
  config.method = "get";
  return axios.get(url, config)
}

const put = (url = '', data = '', config = {}) => {
  return axios.put(url, data, config)
}

//Cannot contain a delete method - Cause delete is a keyword.

const del = (url = '', config = {}) => {
  return axios.delete(url, config)
}

//Encapsulating in a JSON object

const HttpClient = {
  post,
  get,
  put,
  delete: del,
  baseUrl,
  apiKey,
  sourceUrl
}

export { HttpClient }