import React from "react";
import { PriceChart } from "../PriceChart";
import { getFormattedDate } from "../../utils";
import { overviewFormatter } from "../../utils";

export const PriceChartContainer = (props) => {
  const { currencySymbol, dates, prices, isLoading, className } = props;
  return (
    <div className={className}>
      <p>BTC</p>
      <p>
        {currencySymbol} {overviewFormatter(prices[prices.length - 1], 3)}
      </p>
      <p>{getFormattedDate()}</p>
      <PriceChart
        dates={dates}
        prices={prices}
        currencySymbol={currencySymbol}
        isLoading={isLoading}
      />
    </div>
  );
};
