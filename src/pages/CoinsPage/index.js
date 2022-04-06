import React from "react";
import axios from "axios";
import { StyledPriceChartContainer } from "../../ui";
import { CoinsPageContainer } from "../../ui";
import { unixToDay } from "../../utils";

export default class CoinsPage extends React.Component {
  state = {
    dates: [],
    prices: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currency !== prevProps.currency) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { currency } = this.props;
    try {
      const {
        data: { prices },
      } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=30&interval=daily`
      );

      const { dateArr, priceArr } = prices.reduce(
        ({ dateArr, priceArr }, [date, price]) => ({
          dateArr: [...dateArr, unixToDay(date)],
          priceArr: [...priceArr, price],
        }),
        { dateArr: [], priceArr: [] }
      );

      this.setState({ dates: dateArr, prices: priceArr, isLoading: false });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { dates, prices } = this.state;
    const { currencySymbol } = this.props;
    return (
      <CoinsPageContainer>
        <h1>Your overview</h1>
        <StyledPriceChartContainer
          currencySymbol={currencySymbol}
          dates={dates}
          prices={prices}
        />
      </CoinsPageContainer>
    );
  }
}
