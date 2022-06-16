import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);



export default function PriceChart(props) {
  const { dates, prices, currencySymbol, isLoading, isFullScreen } = props;
  const labels = dates;
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dates.map((date, i) => prices[i]),
        borderColor: isFullScreen ? "#191B1F" : "#00FF5F",
        tension: 0.4,
        pointBorderColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          isFullScreen
            ? gradient.addColorStop(0, "rgba(64,64,64,1)")
            : gradient.addColorStop(0, "rgba(0,255,95,0.15)");
          gradient.addColorStop(1, "rgba(25,27,31,0.15)");
          return gradient;
        },
        fill: {
          target: "origin",
        },
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: !isFullScreen,
          maxTicksLimit: 7,
          labelOffset: 50,
          maxRotation: 0,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      tooltip: {
        enabled:!isFullScreen,
        intersect: false,
        titleColor: "#00FF5F",
        titleAlign: "center",
        bodyAlign: "center",
        padding: 10,
        displayColors: false,
        callbacks: {
          title: function (context) {
            return `${context[0].label}`;
          },
          label: function (context) {
            return context.formattedValue + ` ${currencySymbol}`;
          },
          labelTextColor: function (context) {
            return "#00FF5F";
          },
        },
      },
    },
  };
  return <div>{!isLoading && <Line options={options} data={data} />}</div>;
}
