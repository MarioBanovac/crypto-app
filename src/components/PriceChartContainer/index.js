import React from "react";
import { PriceChart } from "../PriceChart";
import { getFormattedDate } from "../../utils";
import { overviewPriceFormatter } from "../../utils";

export const PriceChartContainer = (props) => {
  const { currencySymbol, dates, prices, isLoading, className } = props;
  return (
    <div className={className}>
      <p>BTC</p>
      <p>
        {currencySymbol} {overviewPriceFormatter(prices[prices.length - 1], 3)}
      </p>
      <p>{getFormattedDate()}</p>
      <PriceChart dates={dates} prices={prices} isLoading={isLoading} />
    </div>
  );
};
