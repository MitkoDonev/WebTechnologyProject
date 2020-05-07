const key = "e6ef2cde327f46e3820d0344025b79fc"
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    newsdata.articles.forEach((article) => {

        const div = document.createElement("div")
        div.className = "news"
        div.innerHTML = `
			<h2>${article.title}</h2>
			<a href="${article.url}">
			    <img src="${article.urlToImage}"/>
			</a>`
        articlesDiv.appendChild(div)
    })
}

fetch(url)
    .then(response => response.json())
    .then(recievedNews)