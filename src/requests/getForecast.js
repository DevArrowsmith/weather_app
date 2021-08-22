import axios from "axios";

const getForecast = (
    searchText,
    setSelectedDate,
    setForecasts,
    setLocation,
    setErrorMessage
) => {
    let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

    if (searchText) {
        endpoint += `?city=${searchText}`;
    }

    return axios
        .get(endpoint)
        .then((response) => {
            setErrorMessage("");
            setSelectedDate(response.data.forecasts[0].date);
            setForecasts(response.data.forecasts);
            setLocation(response.data.location);
        })
        .catch((error) => {
            const { status } = error.response;
            if (status === 404) {
                setErrorMessage("City or town not found. Please try again.");
            }
            if (status === 500) {
                setErrorMessage(
                    "A server error occurred. Please try again later."
                );
            }
        });
};

export default getForecast;
