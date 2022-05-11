let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let cityName = document.getElementById("cityName").value;
    
let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1152941031f68d8b4903924e8c729863`;

fetch(url)
    .then((response)=>{
        if(!response.ok){
            alert('No Weather Found For The Input');
        }
    return response.json();
    })
    .then((data) => {
        displayWeather(data);
    })

function displayWeather(data){
    let cityName = document.getElementById("city-name");
    let temp = document.getElementById("temperature");
    let weather = document.getElementById("weather");
    let humidity = document.getElementById("humidity")
    let windSpeed = document.getElementById("wind-speed");
    let sunrise = document.getElementById("humidity")
    let sunset = document.getElementById("wind-speed");
    cityName.innerText = data.name;
    let weatherInCelcius = (parseInt(data.main.temp) - 273);
    temp.innerText = weatherInCelcius + " Degree Celcius";
    weather.innerText = data.weather[0].description;
    humidity.innerText = data.main.humidity;
    sunrise.innerText = "Sunrise "+data.sys.sunrise;
    sunset.innerText = "Sunset "+data.sys.sunset;
    windSpeed = data.wind.speed;
    console.log(data);
}
})