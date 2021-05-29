const API_KEY='47173ddcf17643aa8736046066144a0b'

const url = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=47173ddcf17643aa8736046066144a0b'
export async function getNews() {
	let result = await fetch(url).then(response => response.json());
  console.log("result " , result)

	return result.articles;
}