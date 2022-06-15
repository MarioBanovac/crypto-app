const initialState = {
  currency: "usd",
  currencySymbol: "$",
  symbols: {
    usd: "$",
    gbp: "£",
    eur: "€",
    btc: "₿",
    eth: "Ξ",
  },
};

export const CURRENCY_CHANGE_CURRENCY_SUCCESS =
  "CURRENCY_CHANGE_CURRENCY_SUCCESS";

export default function (state = initialState, action) {
  switch (action.type) {
    case CURRENCY_CHANGE_CURRENCY_SUCCESS:
      return {
        ...state,
        currency: action.payload,
        currencySymbol: state.symbols[action.payload.toLowerCase()],
      };
    default:
      return state;
  }
}
