
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";

import { getWeather, getForecast } from "./services/weather";

function App() {

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSearch(city) {

        if (!city.trim()) {
            setError("Please enter a city name");
            return;
        }

        try {

            setLoading(true);
            setError("");

            const currentData = await getWeather(city);
            const forecastData = await getForecast(city);

            setWeather(currentData);
            setForecast(forecastData);

        } catch (err) {

            setError(err.message);
            setWeather(null);
            setForecast(null);

        } finally {

            setLoading(false);

        }
    }

    return (
        <>
            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={
                        <Home
                            weather={weather}
                            onSearch={handleSearch}
                            loading={loading}
                            error={error}
                        />
                    }
                />

                <Route
                    path="/forecast"
                    element={
                        <Forecast
                            forecast={forecast}
                            loading={loading}
                            error={error}
                        />
                    }
                />

            </Routes>
        </>
    );
}

export default App;
