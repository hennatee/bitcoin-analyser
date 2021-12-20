export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Price in Euros",
      color: "#fff",
      font: {
        size: 18
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
        color: "#fff"
      }
    },
    y: {
      ticks: {
        color: "#fff"
      }
    }
  }
};