const apiKey = "3523c93df961066055c70e003bccc23f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "./images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "./images/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "./images/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "./images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "./images/mist.png";
                break;
            default:
                weatherIcon.src = "";
                break;
        }

}

searchbtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather("Kathmandu");
