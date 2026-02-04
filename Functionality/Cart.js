const cart = document.querySelector('.cart')
const cartBg = document.querySelector('.cartBg')
const closeCart = document.querySelector('.closeCart')

cart.addEventListener('click', () => {
    cartBg.classList.remove('deActive')
    closeCart.classList.remove('deActive')
})

closeCart.addEventListener('click', () => {
    cartBg.classList.add('deActive')
    closeCart.classList.add('deActive')
})