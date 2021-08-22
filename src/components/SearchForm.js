import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
    const handleInputChange = (event) => setSearchText(event.target.value);

    return (
        <div className="search-form">
            <input
                type="text"
                placeholder="Location"
                onChange={handleInputChange}
                value={searchText}
            />
            <button type="submit" onClick={onSubmit}>
                Search
            </button>
        </div>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchText: PropTypes.string.isRequired,
    setSearchText: PropTypes.func.isRequired,
};

export default SearchForm;
