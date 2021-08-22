import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";
import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
    const { date, description, humidity, icon, temperature, wind } = forecast;
    return (
        <div className="forecast-details" data-testid="forecast-details">
            <div className="forecast-details__date">
                {moment(date).format("ddd Do MMM")}
            </div>
            <div className="forecast-details__description">{description}</div>
            <div className="forecast-details__icon" data-testid="forecast-icon">
                <WeatherIcon name="owm" iconId={icon.toString()} />
            </div>
            <div className="forecast-details__temperature-max">
                Maximum temperature: {temperature.max}°C
            </div>
            <div className="forecast-details__temperature-min">
                Minimum temperature: {temperature.min}°C
            </div>
            <div className="forecast-details__humidity">
                Humidity: {humidity}g/m3
            </div>
            <div className="forecast-details__wind-speed">
                Wind speed: {wind.speed}mph
            </div>
            <div className="forecast-details__wind-direction">
                Wind direction: {wind.direction}
            </div>
        </div>
    );
};

ForecastDetails.propTypes = {
    forecast: PropTypes.shape({
        date: PropTypes.number,
        description: PropTypes.string,
        humidity: PropTypes.number,
        icon: PropTypes.number,
        temperature: PropTypes.shape({
            max: PropTypes.number,
            min: PropTypes.number,
        }),
        wind: PropTypes.shape({
            direction: PropTypes.string,
            speed: PropTypes.number,
        }),
    }).isRequired,
};

export default ForecastDetails;
