import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import { MemoryRouter } from "react-router";
import Homepage from "./HomePage";

describe("Homepage component", () => {
  test("Renders app title and description", () => {
    const view = render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(view.container).toHaveTextContent("Hackacoin", "Bitcoin Analyzer");
  });

  test("Renders call to action -button", () => {
    const view = render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    
    const ctaButton = screen.getByTestId("cta-home");
    expect(view.container).toContainElement(ctaButton);
  });
});
