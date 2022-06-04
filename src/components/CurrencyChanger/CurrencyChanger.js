import React from "react";
import { useSelector } from "react-redux";

export default function CurrencyChanger(props) {
  const { currency, currencySymbol,symbols } = useSelector((state) => state.currencyDetails);
  const { className, handleCurrencyChange } = props;
  return (
    <div className={className}>
      <div>{currencySymbol}</div>
      <div>
        <select value={currency} onChange={handleCurrencyChange}>
          {Object.keys(symbols).map(val=><option key={Math.random()} value={val.toUpperCase()}>{val.toUpperCase()}</option>)}
        </select>
      </div>
    </div>
  );
}
