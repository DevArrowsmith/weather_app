import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = ({
    date,
    temperature,
    description,
    icon,
    onSelect,
}) => {
    return (
        <div className="forecast-summary" data-testid="forecast-summary">
            <div className="forecast-summary__date">
                {moment(date).format("ddd Do MMM")}
            </div>
            <div className="forecast-summary__description">{description}</div>
            <div className="forecast-summary__temperature">
                {temperature.max}°C
            </div>
            <div className="forecast-summary__icon" data-testid="forecast-icon">
                <WeatherIcon name="owm" iconId={icon.toString()} />
            </div>
            <button type="button" onClick={() => onSelect(date)}>
                More details
            </button>
        </div>
    );
};

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
    }).isRequired,
};

export default ForecastSummary;
