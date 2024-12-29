    const apiKey="c6fb4ea30b476bf1a427983752f752dd";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    const weathericon=document.querySelector(".weather-icon");

    async function checkWeather(city){
      const response=await fetch(apiUrl+ city +`&appid=${apiKey}`);

        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
        }else{
            var data=await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity+ "%";
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

            if(data.weather[0].main=="Clouds"){
                weathericon.src="images/clouds.png";
            }else if(data.weather[0]=="Clear"){
                weathericon.src="images/clear.png";
            }else if(data.weather[0]=="Rain"){
                weather.src="iamges/rain.png";
            }else if(data.weather[0]=="Drizzle"){
                weather.src="images/drizzle.png";
            }else if(data.weather[0]=="Mist"){
                weather.src="images/mist.png";
            }

            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
        }
    }

    searchBtn.addEventListener("click",()=>{
      checkWeather(searchBox.value);

    })





























//     const apiKey = "c6fb4ea30b476bf1a427983752f752dd";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//   const data = await response.json();

//   if (response.ok) {
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
//   } else {
//     alert(`Error: ${data.message}`); // Handle errors
//     document.querySelector(".city").innerHTML = "City not found";
//     document.querySelector(".temp").innerHTML = "--";
//     document.querySelector(".humidity").innerHTML = "--";
//     document.querySelector(".wind").innerHTML = "--";
//   }
// }

// searchBtn.addEventListener("click", () => {
//   const city = searchBox.value.trim();
//   if (city) {
//     checkWeather(city);
//   } else {
//     alert("Please enter a city name");
//   }
// });