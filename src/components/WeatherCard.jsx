
import React from "react";

function WeatherCard({ weather }) {
     if (!weather) {
        return null;
    }

    return (
        <div className="weather-card">

            <div className="weather-left">

                
                <h2>
                    {weather.name}, {weather.sys.country}
                </h2>

                
                <p>
                    {new Date().toLocaleDateString("en-IN", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric"
                    })}
                </p>

                
                <h1>
                    {Math.round(weather.main.temp)}°C
                </h1>

                
                <p>
                    {weather.weather[0].description}
                </p>

            </div>

            <div className="weather-right">

                
                <div>
                    <span>💧 Humidity</span>
                    <strong>{weather.main.humidity}%</strong>
                </div>

            
                <div>
                    <span>💨 Wind Speed</span>
                    <strong>{weather.wind.speed} m/s</strong>
                </div>

                
                <div>
                    <span>🌡️ Pressure</span>
                    <strong>{weather.main.pressure} hPa</strong>
                </div>

            </div>

        </div>
    );
}

export default WeatherCard;
