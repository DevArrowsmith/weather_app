import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
    it("renders the correct forecast detail props", () => {
        const { getByText } = render(<ForecastSummary />);

        expect(getByText("Forecast Summary")).toBeTruthy();
    });
});
