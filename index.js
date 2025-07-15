const apiKey = "952d864a9f9d9881d6cf752687493680";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBar = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".wheather-image");
const weatherBackground = document.querySelector(".weather-card");
document.getElementById("currentTime");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        document.querySelector(".wheather-not-found").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";


        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "https://i.ibb.co/FkZ28Xw0/clouds.png";

        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "https://i.ibb.co/KcdH4F4t/clear.png";

        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "https://i.ibb.co/7xr2s5X2/rain.png";

        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "https://i.ibb.co/kVDqKJMW/drizzle.png";

        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "https://i.ibb.co/2Y7CYMYF/mist.png";

        }

        document.querySelector(".wheather-not-found").style.display = "none";
        document.querySelector(".wheather").style.display = "block";

    }


}


searchButton.addEventListener("click", () => {
    checkWeather(searchBar.value);
})
