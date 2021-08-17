import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
    const validProps = [
        {
            date: 1525132800000,
            description: "Stub description 1",
            icon: "800",
            temperature: {
                max: 21,
                min: 11,
            },
        },
        {
            date: 1525219200000,
            description: "Stub description 2",
            icon: "602",
            temperature: {
                max: 22,
                min: 12,
            },
        },
    ];

    it("renders correctly", () => {
        const { asFragment } = render(
            <ForecastSummaries forecasts={validProps} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders the correct number of forecasts", () => {
        const { getAllByTestId } = render(
            <ForecastSummaries forecasts={validProps} />
        );
        expect(getAllByTestId("forecast-summary")).toHaveLength(2);
    });
});
