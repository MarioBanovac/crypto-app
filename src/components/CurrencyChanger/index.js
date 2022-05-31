import React from "react";
import { useSelector } from "react-redux";

export function CurrencyChanger(props) {
  const { currency, currencySymbol } = useSelector((state) => state.currencyDetails);
  const { className, handleCurrencyChange } = props;
  return (
    <div className={className}>
      <div>{currencySymbol}</div>
      <div>
        <select value={currency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
        </select>
      </div>
    </div>
  );
}
