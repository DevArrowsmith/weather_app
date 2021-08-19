import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = () => {
    const [forecasts, setForecasts] = useState([]);
    const [location, setLocation] = useState({ city: "", country: "" });
    const [selectedDate, setSelectedDate] = useState(0);

    const getForecast = () => {
        const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

        axios.get(endpoint).then((response) => {
            setSelectedDate(response.data.forecasts[0].date);
            setForecasts(response.data.forecasts);
            setLocation(response.data.location);
        });
    };

    useEffect(() => {
        getForecast();
    }, []);

    const selectedForecast = forecasts.find(
        (forecast) => forecast.date === selectedDate
    );

    const handleForecastSelect = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <LocationDetails city={location.city} country={location.country} />
            {selectedForecast && (
                <ForecastDetails forecast={selectedForecast} />
            )}
            <ForecastSummaries
                forecasts={forecasts}
                onForecastSelect={handleForecastSelect}
            />
        </div>
    );
};

export default App;
