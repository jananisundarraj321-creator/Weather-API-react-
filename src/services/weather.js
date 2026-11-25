
const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const FORECAST_KEY = import.meta.env.VITE_FORECAST_API_KEY;
export async function getWeather(city) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${WEATHER_KEY}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();
    return data;
}
export async function getForecast(city) {

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${FORECAST_KEY}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Forecast not found");
    }

    return data;
}

