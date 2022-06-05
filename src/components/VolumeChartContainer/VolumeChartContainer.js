import React from "react";
import VolumeChart  from "components/VolumeChart";
import { getFormattedDate,overviewFormatter } from "utils";

export default function VolumeChartContainer(props){
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
