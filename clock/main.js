



document.addEventListener("DOMContentLoaded", () => {
    // displayClock();
    displayClock()
})

function displayClock() {
    const content = document.getElementById("content");
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
// function startTime() {
//     // const today = new Date();
//     // let h = today.getHours();
//     // let m = today.getMinutes();
//     // let s = today.getSeconds();
//     // m = checkTime(m);
//     // s = checkTime(s);
//     document.getElementById('content').innerHTML =  h + ":" + m + ":" + s;
//     setTimeout(startTime, 1000);
//   }


function checkTime(i) {
    if (i<10) {
        i = "0" + 1
    }
    return i
}