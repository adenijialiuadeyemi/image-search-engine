import { accessKey } from "./config.js"

const formContainer = document.querySelector('.form-container')
let seacrchBox = document.querySelector('.search-box')
let searchResult = document.querySelector('.search-result')
let showMoreButton = document.querySelector('.show-more')

let page;
let keyword = ''

async function searchImages() {
  keyword = seacrchBox.value
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=${12}`

  const response = await fetch(url)
  const data = await response.json()

  if (page === 1) {
    searchResult.innerHTML = ""
  }

  const results = data.results;
  results.map((result) => {
    const imageElem = document.createElement('img')
    imageElem.src = result.urls['small']
    const imageLinkElem = document.createElement('a')
    imageLinkElem.href = result.links['html']
    imageLinkElem.target = '_blank'
    imageLinkElem.appendChild(imageElem)
    searchResult.appendChild(imageLinkElem)

    showMoreButton.style.display = "block"
  })
}

formContainer.addEventListener('submit', (e) => {
  e.preventDefault()
  page = 1
  searchImages()
})

showMoreButton.addEventListener('click', (e) => {
  e.preventDefault()
  page += 1
  searchImages()
})