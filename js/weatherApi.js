let input = document.getElementById("weatherInput");
input.addEventListener("keyup", (e) => {
    e.preventDefault();
    let searchKey = e.target.value;
    searchWeather(searchKey);
});
function searchWeather(searchKey) {
    let weatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${searchKey}&appid=476e5645e9856c6017ec878e03e74233`;
    window.fetch(weatherApi)
        .then((data) => {
            console.log(data);
            data.json().then((data) => {
                console.log(data)
                let weatherData = data.main;
                console.log(weatherData)
                // let output = [];
                // for (let api of weatherData) {
                //     console.log(api)
                // }
                document.getElementById("WeatherTemplate").innerHTML = `
                <section>
                    <div>
                      City:${data.name}
                    </div>
                    <ul>
                        <li>currentTemparature:${weatherData.temp - 273} °C</li>
                        <li>maxiumTemparature:${weatherData.temp_max - 273}°C</li>

                        <li>miniumTemparature:${weatherData.temp_min - 273}°C</li>
                    </ul>
                </section>
                   `;
            }).catch(err => console.log(err))
        })
        .catch((err) => { console.log(err) })
}



// weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=Bengaluru,in&appid=cadc70e6247c33c3d840b35b783197c8"
// window.fetch(weatherApi)
//     .then((data) => {
//         console.log(data);
//         data.json().then((data) => {
//             console.log(data)
//         }).catch(err => console.log(err))
//     })
//     .catch((err) => { console.log(err) })