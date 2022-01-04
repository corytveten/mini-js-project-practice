window.addEventListener('DOMContentLoaded', () => {
    console.log("load")
    displayNumber()
})

function displayNumber() {
    const display = document.getElementById('display');
    const numberGrid = document.getElementById('number-grid');

    numberGrid.addEventListener('click', (e) => {
        console.log(e.target.innerText)
        if (display.innerText === '0') {
            display.innerText = e.target.innerText
        } else {
            display.innerText += e.target.innerText
        }
    })
    
}