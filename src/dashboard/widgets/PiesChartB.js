import React from "react";
import ReactApexChart from "react-apexcharts";

export default function Monochrome() {
  const state = {
    series: [25, 15, 44, 55, 41, 17],
    options: {
      chart: {
        width: "100%",
        type: "pie",
      },
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      theme: {
        monochrome: {
          enabled: true,
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5,
          },
        },
      },
      title: {
        text: "Monochrome Pie",
      },
      dataLabels: {
        formatter(val, opts) {
          const name = opts.w.globals.labels[opts.seriesIndex];
          return [name, val.toFixed(1) + "%"];
        },
      },
      legend: {
        show: false,
      },
    },
  };
  return (
    <>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          height={380}
        />
      </div>
    </>
  );
}
