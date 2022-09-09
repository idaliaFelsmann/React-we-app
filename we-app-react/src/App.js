
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
     
    <div class="container">
      <div class="content">
        <form id="search-form" class="mb-3">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Enter city"
                class="form-control"
                id="city-input-user"
                autocomplete="off"
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                class="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <em class="city">Alaska</em>
        <br />
        <em
          ><strong id="degrees">19°</strong
          ><a href="https://www.google.com/search?q=weather+google&oq=weather+google&aqs=chrome..69i57j0i22i30l9.11421j1j7&sourceid=chrome&ie=UTF-8" id="celsius-link" class="active">°C </a> |
          <a href="https://www.google.com/search?q=weather+google&oq=weather+google&aqs=chrome..69i57j0i22i30l9.11421j1j7&sourceid=chrome&ie=UTF-8" id="fahrenheit-link">°F </a></em
        >
        <img src="imgs/sunnyIcon.png" alt="Clear" id="mainIcon" width="50%" />
        <div class="boxInfo">
          <p class="day">Monday</p>
          <p class="time">14:40</p>
          <div class="lastUp">(last updated)</div>
          <hr />
          <div class="infoWeather">
            <ul>
              <li><span id="description">Cloudy</span></li>
              <li>Humidity:<span id="humidity"> 20</span>%</li>
              <li>Wind: <span id="wind">20</span>km/h</li>
            </ul>
          </div>
        </div>

        <div class="weather-forecast" id="forecast">
          <div class="row">
            <div class="col-2">
              <div class="weather-forecast-date">Thu</div>
              <img
                src="http://openweathermap.org/img/wn/50d@2x.png"
                alt=""
                width="42"
              />
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> 18° </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <small>
        <a href="https://github.com/idaliaFelsmann/MinimalWappG" 
          >Open-source code</a
        >
        by Idalia F.
      </small>
    </div>
      </header>
    </div>
  );
}

export default App;
