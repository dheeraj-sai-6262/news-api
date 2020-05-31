// async function getPlaces() {
//     var input = document.getElementById("input");
//     await new google.maps.places.Autocomplete(input);


// }

// let inputIdTag = document.getElementById("input");
// inputIdTag.addEventListener("keyup", () => {
//     getPlaces();
// })




let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let searchKey = document.getElementById("input").value;
    console.log(searchKey);
    searchWeather(searchKey);
});
function searchWeather(searchKey) {
    let weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=ee91d1c8d95a3f8607b0e1badf5da33b`;
    window.fetch(weatherApi)
        .then((data) => {
            console.log(data);
            data.json()
                .then((weather) => {
                    console.log(weather)
                    let weatherData = weather.weather;
                    // console.log(weather);

                    // console.log(Object.keys(weatherData))
                    let main = weather.main;
                    output = [];
                    for (let x of weatherData) {
                        output += `
    <div class="col-md-12 mt-4 card">
        <div class="card-body">
       <h1>${weather.name}</h1>
       <div>
       <p class="icon">
       <img src="http://openweathermap.org/img/wn/${x.icon}.png" /></p>
       <p><span>temp:</span>
       <span class="temp">${weather.main.temp}&deg;c</span></p>
       <p class="float-left">humidity:${weather.main.humidity}&deg;c</p>
       <p class= "des float-left">humidity:${x.description}</p>
       <p class="des float-right">humidity:${x.main}</p></div>
       </div>
   </div>
`;
                        document.getElementById("WeatherTemplate").innerHTML = output;
                    }
                    document.querySelector("#WeatherTemplate  .card-body").innerHTML += `</br>
<section>
    <div>
      City:${weather.name}
    </div>
    <ul>
        <li>currentTemparature:${main.temp - 273}°C</li>
        <li>maxiumTemparature:${main.temp_max - 273}°C</li>

        <li>miniumTemparature:${main.temp_min - 273}°C</li>
    </ul>
</section>
   `;

                })
                .catch(err => console.log(err))
        })
        .catch((err) => console.log(err))
}





// function searchWeather(searchKey) {
//     weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=47c33c3cadc70e62d840b35b783197c8"
//     window.fetch(weatherApi)
//         .then((data) => {
//             console.log(data);
//             data.json().then((data) => {
//                 console.log(data)
//             }).catch(err => console.log(err))
//         })
//         .catch((err) => console.log(err))
// }476e5645e9856c6017ec878e03e74233