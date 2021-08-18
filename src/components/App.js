import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = ({ forecasts, location }) => {
    const { city, country } = location;

    const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
    const handleForecastSelect = (date) => {
        setSelectedDate(date);
    };
    const selectedForecast = forecasts.find(
        (forecast) => forecast.date === selectedDate
    );

    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <LocationDetails city={city} country={country} />
            <ForecastDetails forecast={selectedForecast} />
            <ForecastSummaries
                forecasts={forecasts}
                onForecastSelect={handleForecastSelect}
            />
        </div>
    );
};

export default App;

App.propTypes = {
    forecasts: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.number,
            description: PropTypes.string,
            icon: PropTypes.string,
            temperature: PropTypes.shape({
                max: PropTypes.number,
                min: PropTypes.number,
            }),
        })
    ).isRequired,
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
};
