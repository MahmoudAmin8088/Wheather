var date = document.getElementById('date');
var locations = document.getElementById('location');
var icon = document.getElementById('body-icon');
var kobra = document.getElementById('kobra');
var soghra = document.getElementById('soghra');
var sunny = document.getElementById('sunny');
var Row = document.getElementById('Row');
var input = document.getElementById("input");

async function getWheather(city = 'cairo') {

    var key = "b80505a6fdea453196b175258230708"

    var apiResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3`)

    var result = await apiResponse.json();
    let box ='';
    for (var i = 0; i < 3; i++) {
        const date = result.forecast.forecastday[i].date;
        const day = new Date(date).toLocaleDateString(undefined, {
            weekday: "long",
        });
        const maxTemp = result.forecast.forecastday[i].day.maxtemp_c;
        const minTemp = result.forecast.forecastday[i].day.mintemp_c;
        const descWetherd = result.forecast.forecastday[i].day.condition.text;
        const icon = result.forecast.forecastday[i].day.condition.icon;
        console.log(icon);
        

        box += `
                    <div class="col-md-4">
                    <div class="card text-bg-dark mb-3">
                        <div class="card-heads">
                            <div id="date" class="card-header">${day}</div>
                        </div>
                        <div class="card-body text-center">
                            <h5 id="location" class="card-title">${city}</h5>
                            <div id="body-icon" class="body-icon">
                            <img src="${'https:'+icon}" alt="Condition-wheather">
                            </div>
                            <div id="kobra" class="kobra">${maxTemp}</div>
                            <div id="soghra" class="so8ra">${minTemp}</div>
                            <p id="sunny" class="card-text">${descWetherd}</p>
                        </div>
                    </div>
                </div>
        `
    }

    Row.innerHTML = box;
}


  getWheather();

  input.addEventListener("input", function (info) {
    getWheather(info.target.value);
  });