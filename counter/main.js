const number = document.getElementById('counter');
const increaseButton = document.getElementById('increase-btn');
const decreaseButton = document.getElementById('decrease-btn');


document.addEventListener("DOMContentLoaded", () => {
    counter()

})

function counter() {
    increaseClick();
    decreaseClick()
}

function increaseClick() {
    increaseButton.addEventListener('click', () => {
        number.innerText = parseInt(number.innerText) + 1
    })
}

function decreaseClick() {
    decreaseButton.addEventListener('click', () => {
        number.innerText = parseInt(number.innerText) - 1
        console.log('click')
    })
}