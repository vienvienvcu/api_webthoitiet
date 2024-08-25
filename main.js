const apiKey ="ae40a1d2fd5758d0fc3c543f437e6478";
// const city = "japan";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}"

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const cityElement = document.querySelector(".city)");





async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}` );
   
    // console.log(data);
    // console.log(data.main.temp);
    // console.long(data.name);
    
    // document.querySelector(".city").innerHTML = data.name;
    // document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
    // document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    // document.querySelector(".wind").innerHTML = data.wind.speed + "km/h" ;

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }else{
        const data = await response.json();
    updateWeatherUI(data);
}
}
    const cityElement = document.querySelector(".city");
    const temperature = document.querySelector(".temp");
    const humidity = document.querySelector(".humidity");
    const windSpeed = document.querySelector(".wind");
    const weatherIcon =document.querySelector(".weather-icon");


// checkWeather();

function updateWeatherUI(data){
    cityElement.textContent = data.name;
    temperature.textContent = Math.round(data.main.temp) + "°c";
    humidity.textContent = data.main.humidity +'%';
    windSpeed.textContent =data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/img/cloudy.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./img/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./img/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./img/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./img/mist-clouds.png"
    }
     
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display ="none";
   
 
}

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

   searchBtn.addEventListener("click", ()=>{
        // e.preventDefault();
        const city = searchBox.value;
        checkWeather(city);

    });
 
