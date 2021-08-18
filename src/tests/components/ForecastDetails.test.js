import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
    const validProps = {
        forecast: {
            date: 1525046400000,
            description: "Stub description",
            humidity: 30,
            icon: "800",
            temperature: {
                min: 12,
                max: 34,
            },
            wind: {
                speed: 20,
                direction: "s",
            },
        },
    };

    it("renders correctly", () => {
        const { asFragment } = render(
            <ForecastDetails forecast={validProps.forecast} />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders using the correct props", () => {
        const { getByText, getByTestId } = render(
            <ForecastDetails forecast={validProps.forecast} />
        );

        expect(getByText("Mon 30th Apr")).toHaveClass("forecast-details__date");
        expect(getByText("Stub description")).toHaveClass(
            "forecast-details__description"
        );
        expect(getByText("Humidity: 30g/m3")).toHaveClass(
            "forecast-details__humidity"
        );
        expect(getByTestId("forecast-icon")).toHaveClass(
            "forecast-details__icon"
        );
        expect(getByText("Maximum temperature: 34°C")).toHaveClass(
            "forecast-details__temperature-max"
        );
        expect(getByText("Minimum temperature: 12°C")).toHaveClass(
            "forecast-details__temperature-min"
        );
        expect(getByText("Wind speed: 20mph")).toHaveClass(
            "forecast-details__wind-speed"
        );
        expect(getByText("Wind direction: s")).toHaveClass(
            "forecast-details__wind-direction"
        );
    });
});
