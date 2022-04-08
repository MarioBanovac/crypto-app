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

export const PriceChart = (props) => {
  const { dates, prices, currencySymbol, isLoading } = props;
  const labels = dates;
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dates.map((date, i) => prices[i]),
        borderColor: "#00FF5F",
        tension: 0.4,
        pointBorderColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          gradient.addColorStop(0, "rgba(0,255,95,0.15)");
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
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          alignment: "start",
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
        intersect: false,
        titleColor: "#00FF5F",
        titleAlign: "center",
        bodyAlign: "center",
        padding: 10,
        displayColors: false,
        callbacks: {
          title: function (context) {
            return "Price of bitcoin";
          },
          label: function (context) {
            return context.formattedValue + ` ${currencySymbol}`;
          },
        },
      },
    },
  };
  return <div>{!isLoading && <Line options={options} data={data} />}</div>;
};
