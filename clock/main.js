



document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    
    displayClock();
    colorChange();
})

function displayClock() {

    let clock = new Date;
    let h = clock.getHours();
    let m = clock.getMinutes();
    let s = clock.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    content.innerHTML = `
        <h2>Time: ${clock}</h2>
        <h3>Hour: ${h}:${m}:${s}</h3>
    `;
    setTimeout(displayClock, 1000)
}

function colorChange() {
    document.addEventListener("click", () => {
        const title = document.getElementById("title")
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        console.log(randomColor)
            title.style.color = `#${randomColor}`
            
    })
}



function checkTime(i) {
    if (i<10) {
        i = "0" + 1
    }
    return i
}