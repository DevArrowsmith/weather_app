import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ city, country, errorMessage }) => {
    return errorMessage ? (
        <h1>{errorMessage}</h1>
    ) : (
        <h1>{`${city}, ${country}`}</h1>
    );
};

LocationDetails.defaultProps = {
    errorMessage: "",
};

LocationDetails.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
};

export default LocationDetails;
