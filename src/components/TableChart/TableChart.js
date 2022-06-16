import React from "react";
import { Line } from "react-chartjs-2";
import { useTheme } from "styled-components";
import { StyledTableChartContainer } from "ui";

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

export default function TableChart(props){
  const theme = useTheme();
  const { dates, prices, last7d } = props;
  const borderColor = last7d >= 0 ? theme.mainPositive : theme.mainNegative;
  const labels = dates;
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: dates.map((date, i) => prices[i]),
        borderColor: borderColor,
        tension: 0.4,
        pointBorderColor: theme.transparentDark,
        pointBackgroundColor: theme.transparentDark,
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
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  return (
    <StyledTableChartContainer>
      <Line options={options} data={data} />
    </StyledTableChartContainer>
  );
};
