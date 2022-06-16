import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { changeCurrency } from "store/currency/currency.actions";

export default function CurrencyChanger(props) {
  const dispatch = useDispatch();
  const { currency, currencySymbol,symbols } = useSelector((state) => state.currencyDetails);
  const { className } = props;

  const handleCurrencyChange = ({ target: { value } }) => {
      dispatch(changeCurrency(value));
  }

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
