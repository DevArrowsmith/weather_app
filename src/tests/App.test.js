import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders Weather App title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Weather App/i);
  expect(titleElement).toBeInTheDocument();
});
