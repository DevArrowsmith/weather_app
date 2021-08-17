import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

const App = ({ forecasts, location }) => {
    const { city, country } = location;
    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <LocationDetails city={city} country={country} />
            <ForecastSummaries forecasts={forecasts} />
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
