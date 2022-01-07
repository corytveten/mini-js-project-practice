window.addEventListener('DOMContentLoaded', () => {
    console.log("load")
    displayNumber();
    // calculate();
})

function displayNumber() {
    const display = document.getElementById('display');
    const numberGrid = document.getElementById('number-grid');
    let calculation = 0

    numberGrid.addEventListener('click', (e) => {
        // console.log(e.target.innerText)
        if (display.innerText === '0') {
            display.innerText = e.target.innerText;
            calculation = e.target.innerText;
        } else if (e.target.innerText === "=") {
            calculate(calculation)
        } else {
            display.innerText += e.target.innerText
            calculation += e.target.innerText;
        }

    })
    
}

function calculate(calculation) {
    console.log(parseInt(calculation))
    calculation.split()
}

