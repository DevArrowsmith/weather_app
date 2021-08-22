import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";
import { location, forecasts } from "../data/mock-forecast.json";

describe("App component", () => {
    test("Renders correctly (snapshot)", () => {
        const { asFragment } = render(
            <App forecasts={forecasts} location={location} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
