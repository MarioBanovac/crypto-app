import React from "react";
import { VolumeChart } from "../VolumeChart";
import { getFormattedDate } from "../../utils";
import { overviewFormatter } from "../../utils";

export const VolumeChartContainer = (props) => {
  const { currencySymbol, dates, volumes, isLoading, className } = props;
  return (
    <div className={className}>
      <p>BTC Volume</p>
      <p>
        {currencySymbol} {overviewFormatter(volumes[volumes.length - 1], 3)}
      </p>
      <p>{getFormattedDate()}</p>
      <VolumeChart
        dates={dates}
        volumes={volumes}
        currencySymbol={currencySymbol}
        isLoading={isLoading}
      />
    </div>
  );
};
