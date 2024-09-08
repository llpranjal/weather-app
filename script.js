const apiKey = "acc47b1d9837db5222d9fcf10b920bc6";
const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox= document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city){
    
    const response =  await fetch(currentWeatherUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    document.querySelector(".location").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "mph";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else{
        weatherIcon.src = "images/snow.png";
    }
}

searchButton.addEventListener("click",() => {
        getWeather(searchBox.value);
})






