const select = document.querySelector('.select')
const city = document.querySelector('.city')


function updatingCities() {
    if(select) {
        city.innerHTML = select.value
        console.log(select.value);
        console.log(select);        
    }
    else {
        city.innerHTML = 'City'
    }
}

select.addEventListener('change', updatingCities)