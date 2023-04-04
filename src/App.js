import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: 10,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "b95f179627c8dd37f41e1be6e3250e19";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
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
                    <img src={weatherData.icon} alt={weatherData.description} />
                    <div>
                      <strong>{Math.round(weatherData.temp)}</strong>
                      <span className="units">°C</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <ul>
                    <li>LGBT weather forecast</li>
                    <li>Love is love!</li>
                    <li>Humidity:{weatherData.humidity}%</li>
                    <li>Wind:{Math.round(weatherData.wind)} km/h</li>
                  </ul>
                </div>
              </div>
              <div className="weather-forecast"></div>
              <form onSubmit={handleSubmit} class="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city..."
                      className="form-control"
                      autocomplete="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                      autoFocus="on"
                    />
                  </div>
                </div>
              </form>
            </div>
            <small>
              Coded by
              <a
                href="https://github.com/PaulinaBraz/weather-react"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Paulina Prassol Braz
              </a>
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
