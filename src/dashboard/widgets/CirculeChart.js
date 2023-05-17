import React from "react";
import ReactApexChart from "react-apexcharts";

export default function CirculeChart() {
  const state = {
    series: [100, 77, 51, 60],
    options: {
      chart: {
        type: "radialBar",
        toolbar: {
          show: true,
          tools: {
            offsetX: 0,
            offsetY: 0,
            download: true,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false,
          },
        },
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          offsetX: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "10%",
            background: "transparent",
            image: undefined,
          },

          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: "8px",
              fontFamily: undefined,
              fontWeight: 600,
              color: "undefined",
              offsetY: 2,
            },
            value: {
              show: true,
              fontSize: "8px",
              fontFamily: undefined,
              fontWeight: 400,
              color: "undefined",
              offsetY: 6,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      colors: ["#00d58f", "#0094f1", "#ff176b", "#8700e2"],
      labels: ["Total", "IBFT", "M-Paisa", "Branchless Banking"],
      legend: {
        show: true,
        floating: true,
        fontSize: "12px",
        position: "left",
        offsetX: -35,
        offsetY: -20,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0,
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          vertical: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  };
  return (
    <>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={400}
      />
    </>
  );
}
