const API_KEY = "3ef10f017c353fa1ce9857c732273dba";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log("your location is " + lat + "  " + lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });

}
function onGeoError(){
    alert("can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);