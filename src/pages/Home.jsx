
import React from "react";

import SearchBar from "../components/Searchbar";
import WeatherCard from "../components/WeatherCard";

function Home({ weather, onSearch, loading, error }) {

    return (

        <div className="home">

            <div className="home-header">

                <h1>Track Weather Anywhere</h1>

                <p>
                    Get real-time weather data and 5-day forecasts
                    for any location worldwide.
                </p>

            </div>

            {/* Only search bar in the application */}

            <SearchBar onSearch={onSearch} />

            {loading && <p>Loading weather...</p>}

            {error && <p className="error">{error}</p>}

            {weather && (
                <WeatherCard weather={weather} />
            )}

        </div>

    );
}

export default Home;
