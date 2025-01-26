"use client";

import React, { useState } from "react";
import Chart from "react-apexcharts";

function App() {
  const [chartConfig] = useState({
    options: {
      chart: {
        id: "basic-pie",
      },
      labels: ["Accomplished","Gap"], // Categorías para las porciones
    },
    series: [82, 18], 
  });

  return (
    <div className="app mx-auto pt-28">
      <div className="row">
        <h1 className="text-center text-2xl font-bold mb-6">Service factor</h1>
        <div className="mixed-chart flex justify-center">
          <Chart
            options={chartConfig.options}
            series={chartConfig.series}
            type="pie"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
