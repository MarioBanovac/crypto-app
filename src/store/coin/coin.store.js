import { toUTCDate } from "utils";

const initialState = {
  imageUrl: "",
  coinName: "",
  coinSymbol: "",
  homepage: "",
  price: "",
  allTimeHigh: "",
  allTimeHighDate: "",
  allTimeLow: "",
  allTimeLowDate: "",
  price_change_percentage_24h_in_currency: "",
  marketCap: "",
  fullyDilutedValuation: "",
  volume24H: "",
  currentPrice: "",
  circulatingSupply: "",
  maxSupply: "",
  description: "",
  coinLinks: "",
  isLoading: true,
};

export const GET_COIN_DATA_SUCCESS = "GET_COIN_DATA_SUCCESS";

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COIN_DATA_SUCCESS:
      const { data, currency } = action.payload;
      return {
        ...state,
        imageUrl: data.image.small,
        coinName: data.name,
        coinSymbol: data.symbol,
        homepage: new URL(data.links.homepage[0]).hostname,
        price: data.market_data.current_price[currency.toLowerCase()],
        allTimeHigh: data.market_data.ath[currency.toLowerCase()],
        allTimeHighDate: toUTCDate(
          data.market_data.ath_date[currency.toLowerCase()]
        ),
        allTimeLow: data.market_data.atl[currency.toLowerCase()],
        allTimeLowDate: toUTCDate(
          data.market_data.atl_date[currency.toLowerCase()]
        ),
        price_change_percentage_24h_in_currency:
          data.market_data.price_change_percentage_24h_in_currency[
            currency.toLowerCase()
          ],
        marketCap: data.market_data.market_cap[currency.toLowerCase()],
        fullyDilutedValuation:
          data.market_data.fully_diluted_valuation[currency.toLowerCase()],
        volume24H: data.market_data.total_volume[currency.toLowerCase()],
        currentPrice: data.market_data.current_price[currency.toLowerCase()],
        circulatingSupply: data.market_data.circulating_supply,
        maxSupply: data.market_data.max_supply,
        description: data.description.en,
        coinLinks: data.links.blockchain_site,
        isLoading: false,
      };
    default:
      return state;
  }
}
