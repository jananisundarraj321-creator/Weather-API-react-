
import React from "react";
import ForecastCard from "../components/ForecastCard";

function Forecast({ forecast, loading, error }) {

    const dailyForecast = forecast?.list
        ? forecast.list.reduce((days, item) => {

            const date = item.dt_txt.split(" ")[0];

            const existingIndex = days.findIndex(
                day => day.dt_txt.split(" ")[0] === date
            );

            const hour = Number(
                item.dt_txt.split(" ")[1].slice(0, 2)
            );

            if (existingIndex === -1) {
                days.push(item);
            } else {

                const existingHour = Number(
                    days[existingIndex].dt_txt.split(" ")[1].slice(0, 2)
                );

                if (Math.abs(hour - 12) < Math.abs(existingHour - 12)) {
                    days[existingIndex] = item;
                }
            }

            return days;

        }, []).slice(0, 5)
        : [];

    return (

        <div className="forecast-page">

            <h1>5-Day Weather Forecast</h1>

            <p>Upcoming weather conditions</p>

            {loading && <p>Loading forecast...</p>}

            {error && <p className="error">{error}</p>}

            {!loading && !error && !forecast && (
                <p>Please search for a city on the Home page first.</p>
            )}

            {forecast && (

                <>
                    <h2 className="forecast-city">
                        {forecast.city.name}, {forecast.city.country}
                    </h2>

                    <div className="forecast-container">

                        {dailyForecast.map(day => (

                            <ForecastCard
                                key={day.dt}
                                day={day}
                            />

                        ))}

                    </div>
                </>

            )}

        </div>

    );
}

export default Forecast;
