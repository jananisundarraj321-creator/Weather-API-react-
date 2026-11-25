
import React from "react";

function ForecastCard({ day }) {

    return (

        <div className="forecast-card">

            <h3>
                {new Date(day.dt * 1000).toLocaleDateString(
                    "en-IN",
                    { weekday: "long" }
                )}
            </h3>

            <p className="forecast-date">
                {new Date(day.dt * 1000).toLocaleDateString(
                    "en-IN",
                    { day: "numeric", month: "short" }
                )}
            </p>

            <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
            />

            <h1>
                {Math.round(day.main.temp)}°C
            </h1>

            <p className="forecast-condition">
                {day.weather[0].description}
            </p>

            <span>
                Humidity: {day.main.humidity}%
            </span>

            <br />

            <span>
                Wind: {day.wind.speed} m/s
            </span>

        </div>

    );
}

export default ForecastCard;
