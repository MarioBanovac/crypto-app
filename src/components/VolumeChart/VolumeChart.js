import React from "react";
import { Bar } from "react-chartjs-2";
import { useTheme } from "styled-components";
import { SpinnerCircular } from "spinners-react";
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

import { isThemeDark, isThemeLight } from "utils";

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

export default function VolumeChart(props) {
  const theme = useTheme();
  const { dates, volumes, currencySymbol, isLoading } = props;
  const labels = dates;
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dates.map((date, i) => volumes[i]),
        tension: 0.4,
        pointBorderColor: theme.transparentDark,
        pointBackgroundColor: theme.transparentDark,
        backgroundColor: isThemeDark(theme)
          ? theme.mainNeutral
          : theme.tertiaryPositive,
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
        titleColor: isThemeLight(theme)
          ? theme.tertiaryPositive
          : theme.mainNeutral,
        titleAlign: "center",
        bodyAlign: "center",
        padding: 10,
        displayColors: false,
        backgroundColor: isThemeLight(theme) && "#fff",
        callbacks: {
          title: function (context) {
            return `${context[0].label}`;
          },
          label: function (context) {
            return context.formattedValue + ` ${currencySymbol}`;
          },
          labelTextColor: function (context) {
            return isThemeLight(theme)
              ? theme.tertiaryPositive
              : theme.mainNeutral;
          },
        },
      },
    },
  };
  return (
    <div>
      {!isLoading ? (
        <Bar options={options} data={data} />
      ) : (
        <SpinnerCircular
          style={{
            position: "absolute",
            left: "50%",
            top:"50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      )}
    </div>
  );
}
