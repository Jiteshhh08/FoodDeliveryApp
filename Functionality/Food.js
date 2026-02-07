const contentArea = document.querySelector('.content')
let foodsData = []

fetch('./food.json')
.then(res => res.json())
.then(data => {
    foodsData = data;
    renderFoods(foodsData);
    loadCart();
}
)
.catch(err => console.error(err))

const renderFoods = (foods) => {
    contentArea.innerHTML = foods.map(food => {
        return `<div class="contentBox" data-id="${food.id}">
                <img  class="contentImage" src="${food.Image}" alt="${food.name}">
                <div class="contentDetails">
                <p>${food.category}</p>
                <span>₹${food.price}</span>
                </div>
        </div>`
    }).join('')
}