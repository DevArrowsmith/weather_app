import React, { useState, useEffect } from "react";
import "../styles/App.css";
import SearchForm from "./SearchForm";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";

const App = () => {
    const [locationSearchText, setLocationSearchText] = useState("");
    const [forecasts, setForecasts] = useState([]);
    const [location, setLocation] = useState({ city: "", country: "" });
    const [selectedDate, setSelectedDate] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const getSearchedForecast = () =>
        getForecast(
            locationSearchText,
            setSelectedDate,
            setForecasts,
            setLocation,
            setErrorMessage
        );

    useEffect(() => {
        getSearchedForecast();
    }, []);

    const handleCitySearch = () => getSearchedForecast();

    const handleForecastSelect = (date) => {
        setSelectedDate(date);
    };

    const selectedForecast = forecasts.find(
        (forecast) => forecast.date === selectedDate
    );

    return (
        <div className="weather-app">
            <h1>Weather Forecast</h1>
            <SearchForm
                searchText={locationSearchText}
                setSearchText={setLocationSearchText}
                onSubmit={handleCitySearch}
            />
            <LocationDetails
                city={location.city}
                country={location.country}
                errorMessage={errorMessage}
            />
            {!errorMessage && (
                <>
                    {selectedForecast && (
                        <ForecastDetails forecast={selectedForecast} />
                    )}
                    <ForecastSummaries
                        forecasts={forecasts}
                        onForecastSelect={handleForecastSelect}
                    />
                </>
            )}
        </div>
    );
};

export default App;
