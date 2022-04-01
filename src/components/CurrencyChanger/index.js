import React from "react";

export const CurrencyChanger = (props) => {
  const { className, handleCurrencyChange, currencySymbol, currency } = props;

  function saveToLocalStorage(currency, currencySymbol) {
    localStorage.setItem(
      "currencyDetails",
      JSON.stringify({
        currency: currency,
        currencySymbol: currencySymbol,
      })
    );
  }

  saveToLocalStorage(currency, currencySymbol);

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
};
