import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";
import { location, forecasts } from "../data/mock-forecast.json";

test("renders Weather App title", () => {
    render(<App forecasts={forecasts} location={location} />);
    const titleElement = screen.getByText(/Weather App/i);
    expect(titleElement).toBeInTheDocument();
});
