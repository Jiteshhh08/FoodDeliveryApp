const Header = document.querySelector('.headerContainer')
const searchBar = document.querySelector('.searchBar')
const searchBtn = document.querySelector('.searchBtn')
const searchSVG = document.querySelector('.searchBtnSVG')
 
searchBtn.addEventListener('click', () => {
    searchBar.classList.remove('hidden')
    searchBtn.classList.add('hidden')
    searchSVG.classList.remove('hidden')
})