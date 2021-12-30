/** Configuration of line chart */
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: "Price of bitcoin in euros",
      color: "#e8e8e8",
      font: {
        size: 18,
        family: "Electrolize, sans-serif",
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
        color: "#e8e8e8"
      }
    },
    y: {
      ticks: {
        color: "#e8e8e8"
      }
    }
  }
};