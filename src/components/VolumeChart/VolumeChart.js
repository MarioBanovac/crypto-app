import React from "react";
import { Bar } from "react-chartjs-2";

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

export default function VolumeChart(props){
  const { dates, volumes, currencySymbol, isLoading } = props;
  const labels = dates;
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dates.map((date, i) => volumes[i]),
        borderColor: "#2172E5",
        tension: 0.4,
        pointBorderColor: "rgba(0, 0, 0, 0)",
        pointBackgroundColor: "rgba(0, 0, 0, 0)",
        backgroundColor: "#2172E5",
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
        intersect: false,
        titleColor: "#2172E5",
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
            return "#2172E5";
          },
        },
      },
    },
  };
  return <div>{!isLoading && <Bar options={options} data={data} />}</div>;
};
