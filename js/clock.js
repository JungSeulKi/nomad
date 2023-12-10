const clock = document.querySelector("h2#clock");

function getClock(){

    const toDay = new Date();

    const hours = String(toDay.getHours()).padStart(2,"0");
    const minutes = String(toDay.getMinutes()).padStart(2,"0");
    const seconds = String(toDay.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


getClock();
setInterval(getClock, 1000);