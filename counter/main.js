
document.addEventListener("DOMContentLoaded", () => {
    
    renderCounter()
})

function renderCounter() {
    const counterContent = document.getElementById('counter-content')
    counterContent.innerHTML = counter()
}

function counter() {
    return `0`
}