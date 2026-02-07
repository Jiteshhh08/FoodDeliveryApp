const scrollContainer = document.querySelector('.content')
const leftBtn = document.querySelector('.leftBtn')
const rightBtn = document.querySelector('.rightBtn')

const scrollAmount = 200

rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    })
})

leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    })
})

// OrderNow btn 

const orderNow = document.querySelector('.orderBtn')
const orderingItems = document.querySelector('#contentContainer')

orderNow.addEventListener('click', (e) => {
    orderingItems.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})