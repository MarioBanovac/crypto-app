import React from "react";
import axios from "axios";
import { StyledPriceChartContainer } from "../../ui";
import { StyledVolumeChartContainer } from "../../ui";
import { CoinsPageContainer } from "../../ui";
import { StyledChartsContainer } from "../../ui";
import { StyledTimeFrameChanger } from "../../ui";
import { getFormattedDate } from "../../utils";

export default class CoinsPage extends React.Component {
  state = {
    dates: [],
    prices: [],
    volumes: [],
    isLoading: true,
    timeFrames: [
      {
        isActive: false,
        value: 1,
        displayValue: "1d",
      },
      {
        isActive: true,
        value: 7,
        displayValue: "1w",
      },
      {
        isActive: false,
        value: 30,
        displayValue: "1m",
      },
      {
        isActive: false,
        value: 90,
        displayValue: "3m",
      },
      {
        isActive: false,
        value: 180,
        displayValue: "6m",
      },
      {
        isActive: false,
        value: 365,
        displayValue: "1y",
      },
    ],
  };

  componentDidMount() {
    this.fetchChartData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { timeFrames } = this.state;
    const { currencySymbol } = this.props;
    const currencyChanged = currencySymbol !== prevProps.currencySymbol;
    const timeFrameChanged = timeFrames !== prevState.timeFrames;
    if (currencyChanged || timeFrameChanged) {
      this.fetchChartData();
    }
  }

  changeTimeFrame = ({ target: { innerText } }) => {
    const { timeFrames } = this.state;
    const newTimeFrames = timeFrames.map((object) => {
      if (object.displayValue !== innerText) {
        if (object.isActive) {
          object.isActive = !object.isActive;
          return object;
        } else {
          return object;
        }
      } else {
        object.isActive = true;
        return object;
      }
    });
    this.setState({ timeFrames: newTimeFrames });
  };

  fetchChartData = async () => {
    const { timeFrames } = this.state;
    const activeTimeFrame = timeFrames.filter(({ isActive }) => isActive)[0]
      .value;
    const { currency } = this.props;
    try {
      const {
        data: { prices, total_volumes },
      } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${activeTimeFrame}&interval=${
          activeTimeFrame <= 90 ? "hourly" : "daily"
        }`
      );

      const { dateArr, priceArr } = prices.reduce(
        ({ dateArr, priceArr }, [date, price]) => ({
          dateArr: [...dateArr, getFormattedDate(date)],
          priceArr: [...priceArr, price],
        }),
        { dateArr: [], priceArr: [] }
      );

      const { volumesArr } = total_volumes.reduce(
        ({ volumesArr }, [date, volume]) => ({
          volumesArr: [...volumesArr, volume],
        }),
        { volumesArr: [] }
      );

      this.setState({
        dates: dateArr,
        prices: priceArr,
        volumes: volumesArr,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { dates, prices, volumes, timeFrames } = this.state;
    const { currencySymbol } = this.props;
    return (
      <CoinsPageContainer>
        <h1>Your overview</h1>
        <StyledChartsContainer>
          <StyledPriceChartContainer
            currencySymbol={currencySymbol}
            dates={dates}
            prices={prices}
          />
          <StyledVolumeChartContainer
            currencySymbol={currencySymbol}
            dates={dates}
            volumes={volumes}
          />
        </StyledChartsContainer>
        <StyledTimeFrameChanger
          changeTimeFrame={this.changeTimeFrame}
          timeFrames={timeFrames}
        />
      </CoinsPageContainer>
    );
  }
}
