//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//076016817e5a6cc4f6f3e097b95dc4f0
console.log("Hello World");
const weatherApi = {

    key:"076016817e5a6cc4f6f3e097b95dc4f0",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?"
}

//Event listener function on keypress
//const searchInputBox = document.getElementById("input-box");
//searchInputBox.addEventListener('Keypress' , (event) => {

//console.log(event);


    

    

//getWeatherReport(searchInputBox.value);//
//document.querySelector('.Weather-body').style.display = "block";//

    //}
//);

const weathersearchbox = document.getElementById('searchbox')
weathersearchbox.addEventListener("onsubmit",(e)=>{
    console.log(e)
})


//get weather Report

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units-metric`)
    .then(weather =>{
        returnweather.json();
    }).then(showWeatherReport);
}

//Show weather report
function showWeatherReport(weather){
    console.log(waether);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);


}

//date manage
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}



