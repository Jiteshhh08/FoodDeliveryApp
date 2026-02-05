const Header = document.querySelector('.headerContainer')
const searchBar = document.querySelector('.searchBar')
const searchBtn = document.querySelector('.searchBtn')
const searchSVG = document.querySelector('.searchBtnSVG')
const logIn = document.querySelector('.logIn')
const logInPage = document.querySelector('.logInPage')
const closeLogIn = document.querySelector('.closeLogInPage')
 
searchBtn.addEventListener('click', () => {
    searchBar.classList.remove('hidden')
    searchBtn.classList.add('hidden')
    searchSVG.classList.remove('hidden')
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        searchBar.classList.add('hidden')
        searchSVG.classList.add('hidden')
        searchBtn.classList.remove('hidden')
    }
})

logIn.addEventListener('click', () => {
    logInPage.classList.remove('hidden')
    closeLogIn.classList.remove('hidden')
})

closeLogIn.addEventListener('click', () => {
    logInPage.classList.add('hidden')
    closeLogIn.classList.add('hidden')
})


//Click outside the searchBar

searchBar.addEventListener('click', (e) => {
    e.stopPropagation()
})

document.addEventListener('click', (e) => {
    if (!Header.contains(e.target)) {
        searchBar.classList.add('hidden')
        searchBtn.classList.remove('hidden')
        searchSVG.classList.add('hidden')
    }
})