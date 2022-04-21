//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//api key= 1cae8730b83c3df31773bf3ca84147a7


const weatherApi = {
    key:"1cae8730b83c3df31773bf3ca84147a7",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
    
}
const searchInputBox = document.querySelector("#input-box");

searchInputBox.addEventListener("keypress",(event)=>{

    if(event.keyCode==13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);

        document.querySelector('.weather-body').style.display="block";
    }

});


function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}


//show weather Report
function showWeatherReport(weather){
console.log(weather);

let city = document.querySelector("#city");
city.innerText=`${weather.name},${weather.sys.country}`;

let temperature = document.querySelector("#temp");
temperature.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

let minMaxTemp = document.querySelector("#min-max");
minMaxTemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

let weatherType = document.querySelector("#weather");
weatherType.innerText =`${weather.weather[0].main}`;

let date = document.querySelector("#date");

let todayDate = new Date();
date.innerText = dateManage(todayDate);

if(weatherType.textContent == "Clear"){
    document.body.style.backgroundImage = "url('clear_weather.jpg')";

}else if(weatherType.textContent == "Clouds"){
    document.body.style.backgroundImage = "url('cloudy_weather.jpg')";

}else if(weatherType.textContent == "Rain"){
    document.body.style.backgroundImage = "url('rainy_weather.jpg')";


}else if(weatherType.textContent == "ThunderStrom"){
    document.body.style.backgroundImage = "url('thunder_storm.jpg')";

}else if(weatherType.textContent == "Haze"){
    document.body.style.backgroundImage = "url('smoke.jpg')";

}else if(weatherType.textContent == "Snow"){
    document.body.style.backgroundImage = "url('snow_weather.jpg')";

}else if(weatherType.textContent == "Smoke"){
    document.body.style.backgroundImage = "url('smoke.jpg')";
}

//date manage

function dateManage(dateArg){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

    let months =["January","February","March","April","May","June","July","August","September","October","November","December"];


    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}),${year}`;
}
};
