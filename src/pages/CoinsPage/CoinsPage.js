import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { StyledPriceChartContainer,StyledVolumeChartContainer ,CoinsPageContainer,StyledChartsContainer, StyledTimeFrameChanger,StyledCoinsTableContainer} from "ui";
import { getFormattedDate } from "utils";
import usePrevious from "utils";


export default function CoinsPage(props) {
  const { currency, currencySymbol } = useSelector(
    (state) => state.currencyDetails
  );
  const [dates, setDates] = useState([]);
  const [prices, setPrices] = useState([]);
  const [volumes, setVolumes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeFrames, setTimeFrames] = useState([
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
  ]);
  const prevValues = usePrevious({ currencySymbol, timeFrames });

  useEffect(() => {
    fetchChartData();
  }, []);

  useEffect(() => {
    if (
      prevValues?.currencySymbol !== currencySymbol ||
      prevValues?.timeFrames !== timeFrames
      ) {
        fetchChartData();
    }
  }, [currencySymbol, timeFrames]);


  const changeTimeFrame = ({ target: { innerText } }) => {
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
    setTimeFrames(newTimeFrames);
  };

  const fetchChartData = async () => {
    const activeTimeFrame = timeFrames.filter(({ isActive }) => isActive)[0]
      .value;
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
      setDates(dateArr);
      setPrices(priceArr);
      setVolumes(volumesArr);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
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
        changeTimeFrame={changeTimeFrame}
        timeFrames={timeFrames}
      />
      <StyledCoinsTableContainer
      />
    </CoinsPageContainer>
  );
}
