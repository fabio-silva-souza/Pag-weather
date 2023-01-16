let weather = {
    "apiKey": "a245503530182b0dfe1bcf35d5ea2911",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        
        document.querySelector(".city").innerText = "Location: " + name;
        document.querySelector(".location").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + description + "')" 
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },

    
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("São Paulo");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const day = new Date();
let d = weekday[day.getDay()];
document.querySelector(".day").innerText = d;



function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const hours = new Date();
  let h = addZero(hours.getHours());
  let m = addZero(hours.getMinutes());
  let time = h + ":" + m ;
  document.querySelector(".hours").innerText = time;