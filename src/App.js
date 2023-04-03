import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  let weatherData = {
    city: "London",
    date: "Monday 10:00",
    temp: "24",
    humidity: "40",
    wind: "10",
    imgUrl: "	https://ssl.gstatic.com/onebox/weather/64/sunny.png",
  };
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="overview">
              <h1>{weatherData.city}</h1>
              <ul>
                <li className="update">Last updated: {weatherData.date}</li>
                <li></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temp">
                  <img src={weatherData.imgUrl} alt="" />
                  <div>
                    <strong>{weatherData.temp}</strong>
                    <span className="units">°C</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>LGBT weather forecast &#10084</li>
                  <li>Love is love!</li>
                  <li>Humidity:{weatherData.humidity}%</li>
                  <li>Wind:{weatherData.wind} km/h</li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast"></div>
            <form class="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
          </div>
          <small>
            <a
              href="https://github.com/PaulinaBraz/Weather-app-FinalProject"
              target="_blank"
              rel="noreferrer"
            >
              Coded by
            </a>{" "}
            <span>Paulina Prassol Braz </span>
          </small>
        </div>
      </div>
    </div>
  );
}
