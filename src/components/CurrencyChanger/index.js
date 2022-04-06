import React from "react";

export class CurrencyChanger extends React.Component {
  state = {};

  componentDidUpdate() {
    const { currency, currencySymbol } = this.props;
    this.saveToLocalStorage(currency, currencySymbol);
  }

  saveToLocalStorage = (currency, currencySymbol) => {
    localStorage.setItem(
      "currencyDetails",
      JSON.stringify({
        currency: currency,
        currencySymbol: currencySymbol,
      })
    );
  };
  render() {
    const { className, handleCurrencyChange, currencySymbol, currency } =
      this.props;
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
}
