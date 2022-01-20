import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "@jest/globals";
import AnalyzedData from "./AnalyzedData";

describe('AnalyzedData', () => {
  
  test('should display correct headings', () => {
    const view = render(
      <AnalyzedData />
    )
    expect(view.container).toHaveTextContent("Longest downward", "Highest 24h volume", "Best day to buy", "Best day to sell");
  })

  test('should not display any analyzed data by default', () => {
    render(
      <AnalyzedData />
    )

    const placeholderEmpty = "-";

    const downward = screen.getByTestId("downward-text");
    const volume = screen.getByTestId("volume-text");
    const buy = screen.getByTestId("buy-text");
    const sell = screen.getByTestId("sell-text");

    expect(downward).toHaveTextContent(placeholderEmpty);
    expect(volume).toHaveTextContent(placeholderEmpty);
    expect(buy).toHaveTextContent(placeholderEmpty);
    expect(sell).toHaveTextContent(placeholderEmpty);
  })
})  
