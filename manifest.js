// manifest.js
google.visualization?.registerVisualization({
  visualization: "index.html",
  components: ["script.js"],
  style: "style.css",
  config: {
    data: {
      dimensions: ["Dimension 0"],
      metrics: ["Metric 0", "Metric 1"]
    }
  }
});