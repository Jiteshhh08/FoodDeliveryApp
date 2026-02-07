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

//Item in the cart

let cartSection = []
scrollContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.contentBox')
    if (!card) return;

    const foodId = card.dataset.id;
    addToCart(foodId)
})

const addToCart = (id) => {
    const food = foodsData.find(item => item.id == id)
    if (!food) return;

    const existingItem = cartSection.find(item => item.id == id)

    if (existingItem) {
        existingItem.qty += 1
    }
    else {
        cartSection.push({
            id: food.id,
            name: food.name,
            category: food.category,
            Image: food.Image,
            price: food.price,
            qty: 1
        });
    }
    renderCart()
    saveCart()
}

const cartItems = document.querySelector('.cartItems');
const checkOutTotal = document.querySelector('.grandTotal');

const renderCart = () => {
    cartItems.innerHTML = cartSection.map(item =>
            `<div class='cartItem'>
            <img class="cartImg" src='${item.Image}'>
            <div class="cartDetails">
                <span class="foodName">${item.name} x ${item.qty}</span>
                <span class="foodPrice">₹ ${item.qty * item.price}</span>
            </div>

            <div class="qtyControls">
                <button class="qtyBtn minus" data-id="${item.id}">−</button>
                <span class="qty">${item.qty}</span>
                <button class="qtyBtn plus" data-id="${item.id}">+</button>
            </div>
        </div>`
        ).join('')

    const total = cartSection.reduce((sum, item) => sum + item.price * item.qty, 0)
        checkOutTotal.textContent = `total: ₹ ${total}` 
}

//+ and - logic 

cartItems.addEventListener('click', (e) => {
    const btn = e.target.closest('.qtyBtn');
    if (!btn) return;

    const id = Number(btn.dataset.id);
    const item = cartSection.find(i => i.id === id);
    if (!item) return;

    if (btn.classList.contains('plus')) {
        item.qty += 1;
    }

    if (btn.classList.contains('minus')) {
        item.qty -= 1;
        if (item.qty === 0) {
            cartSection = cartSection.filter(i => i.id !== id);
        }
    }

    saveCart();
    renderCart();
});

//Local Storage

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cartSection));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cartSection = JSON.parse(savedCart);
        renderCart();
    }
}