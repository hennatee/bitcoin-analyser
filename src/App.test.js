import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "@testing-library/jest-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  test("Handles navigation when cta-button is clicked", () => {
    const view = render(<App />);

    const ctaButton = screen.queryByTestId("cta-home");
    userEvent.click(ctaButton);

    expect(view.container).toContainElement(
      screen.getByTestId("analyzed-data")
    );
  });
});
