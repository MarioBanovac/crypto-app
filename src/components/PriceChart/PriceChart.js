import React from "react";
import { useTheme } from "styled-components";
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
import { SpinnerCircular } from "spinners-react";

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

export default function PriceChart(props) {
  const theme = useTheme();
  const { dates, prices, currencySymbol, isLoading, isFullScreen } = props;
  const labels = dates;
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dates.map((date, i) => prices[i]),
        borderColor: isFullScreen
          ? theme.main
          : isThemeDark(theme)
          ? theme.mainPositive
          : theme.mainNeutral,
        tension: 0.4,
        pointBorderColor: theme.transparentDark,
        pointBackgroundColor: theme.transparentDark,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          isFullScreen
            ? gradient.addColorStop(0, theme.secondaryTopGradient)
            : gradient.addColorStop(0, theme.primaryTopGradient);
          gradient.addColorStop(1, theme.bottomGradient);
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
        enabled: !isFullScreen,
        intersect: false,
        titleColor: isThemeDark(theme) ? theme.mainPositive : theme.mainNeutral,
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
            return isThemeDark(theme) ? theme.mainPositive : theme.mainNeutral;
          },
        },
      },
    },
  };
  return (
    <div>
      {!isLoading ? (
        <Line options={options} data={data} />
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
