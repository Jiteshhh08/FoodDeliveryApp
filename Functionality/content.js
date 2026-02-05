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
