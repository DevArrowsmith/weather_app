import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
    const validProps = {
        date: 111111,
        description: "Stub description",
        icon: "800",
        temperature: {
            min: 12,
            max: 34,
        },
    };

    it("renders correctly (snapshot)", () => {
        const { asFragment } = render(
            <ForecastSummary
                date={validProps.date}
                description={validProps.description}
                icon={validProps.icon}
                temperature={validProps.temperature}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders using the correct props", () => {
        const { getByText, getByTestId } = render(
            <ForecastSummary
                date={validProps.date}
                description={validProps.description}
                icon={validProps.icon}
                temperature={validProps.temperature}
            />
        );

        expect(getByText("111111")).toHaveClass("forecast-summary__date");
        expect(getByText("Stub description")).toHaveClass(
            "forecast-summary__description"
        );
        expect(getByTestId("forecast-icon")).toHaveClass(
            "forecast-summary__icon"
        );
        expect(getByText("34°C")).toHaveClass("forecast-summary__temperature");
    });
});
