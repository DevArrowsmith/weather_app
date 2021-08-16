import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
    const validProps = [
        {
            date: 111111,
            description: "Stub description 1",
            icon: "stubIcon1",
            temperature: {
                max: 21,
                min: 11,
            },
        },
        {
            date: 222222,
            description: "Stub description 2",
            icon: "stubIcon2",
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
});
