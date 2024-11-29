const formElem = document.querySelector('.form-container')
let searchBoxElem = document.querySelector('.search-box')
const searchButtonElem = document.querySelector('.search-btn')
let searchResultElem = document.querySelector('.search-btn')

let accessKey = '-iWLP2ImT8Bx5MtrgOhWe5R_Iqy7zhNLGYzgnTRmAdE'

let page;
let keyword = ''


async function searchImages() {
  keyword = searchBoxElem.value
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=${12}`

  const response = await fetch(url)
  const data = await response.json()

  console.log(data)
}

formElem.addEventListener('submit', (e) => {
  e.preventDefault()
  page = 1
  searchImages()
})