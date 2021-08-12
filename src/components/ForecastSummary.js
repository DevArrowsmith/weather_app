import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = ({ date, temperature, description, icon }) => {
    return (
        <div className="forecast-summary">
            <h2>Forecast Summary</h2>
            <div className="forecast-summary__date">{date}</div>
            <div className="forecast-summary__description">{description}</div>
            <div className="forecast-summary__temperature">
                {temperature.max}°C
            </div>
            <div className="forecast-summary__icon" data-testid="forecast-icon">
                {icon}
            </div>
        </div>
    );
};

ForecastSummary.propTypes = {
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
    }).isRequired,
};

export default ForecastSummary;