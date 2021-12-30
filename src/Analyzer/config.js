import { COLORS, FONTS } from "../theme";

/** Configuration of line chart */
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: "Price of bitcoin",
      color: COLORS.text.secondary,
      font: {
        size: 18,
        family: FONTS.primary,
        weight: 400
      }
    },
  },
  elements: {
    point:{
        radius: 0
    }
  },
  scales: {
    x: {
      ticks: {
        color: COLORS.text.primary
      }
    },
    y: {
      ticks: {
        color: COLORS.text.primary
      }
    }
  }
};