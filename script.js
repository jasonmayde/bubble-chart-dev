function draw(data) {
  const values = data.tables.DEFAULT.map(row => ({
    x: row["Dimension 0"],
    y: parseFloat(row["Metric 0"]),
    z: parseFloat(row["Metric 1"]),
    name: row["Dimension 0"],
  }));

  const series = [{
    name: "Bubbles",
    data: values,
  }];

  const options = {
    chart: {
      type: 'bubble',
      height: 400,
    },
    dataLabels: {
      enabled: false
    },
    series: series,
    xaxis: {
      title: { text: "Dimension" },
      labels: { rotate: -45 }
    },
    yaxis: {
      title: { text: "Metric 0" }
    },
    fill: {
      opacity: 0.8
    },
    tooltip: {
      shared: false,
      intersect: true,
      custom: function({ series, seriesIndex, dataPointIndex, w }) {
        const point = series[seriesIndex].data[dataPointIndex];
        return `<strong>${point.name}</strong><br>X: ${point.x}<br>Y: ${point.y}<br>Z: ${point.z}`;
      }
    }
  };

  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
}

dscc.subscribeToData(draw, { transform: dscc.objectTransform });
