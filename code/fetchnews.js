const url =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=158e26b3997947f496bec731c9476c20";

export async function getAllNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}