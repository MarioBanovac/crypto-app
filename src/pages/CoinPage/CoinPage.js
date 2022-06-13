import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import axios from "axios";
import {
  CoinPageContainer,
  StyledFlexContainer,
  StyledRadioButton,
  StyledPriceChartContainer,
} from "ui";
import {
  CoinDescription,
  CoinLinks,
  YourSummary,
  CurrencyConverter,
} from "components";
import { formatCoinName, toUTCDate, getFormattedDate } from "utils";
import usePrevious from "utils";

export default function CoinPage(props) {
  const { currency, currencySymbol } = useSelector(
    (state) => state.currencyDetails
  );

  const [data, setData] = useState({});
  const [dates, setDates] = useState([]);
  const [prices, setPrices] = useState([]);
  const [volumes, setVolumes] = useState([]);
  const [dataReady, setDataReady] = useState(false);
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
      displayValue: "7d",
    },
    {
      isActive: false,
      value: 30,
      displayValue: "30d",
    },
    {
      isActive: false,
      value: 90,
      displayValue: "90d",
    },
    {
      isActive: false,
      value: 180,
      displayValue: "1y",
    },
  ]);

  const prevValues = usePrevious({ currencySymbol, timeFrames });

  const changeTimeFrame = ({ target: { value } }) => {
    const newTimeFrames = timeFrames.map((object) => {
      if (object.displayValue !== value) {
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
  let { pathname } = useLocation();
  const getCoinName = () => formatCoinName(pathname.split("/")[2]);

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

  useEffect(() => {
    fetchCoinData(getCoinName());
  }, []);

  useEffect(() => {
    fetchCoinData(getCoinName());
  }, [currency]);

  const fetchCoinData = async (coinName) => {
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
    );
    setData(data);
    setDataReady(true);
    setIsLoading(false);
  };

  const fetchChartData = async () => {
    const activeTimeFrame = timeFrames.filter(({ isActive }) => isActive)[0]
      .value;
    try {
      const {
        data: { prices, total_volumes },
      } = await axios(
        `https://api.coingecko.com/api/v3/coins/${getCoinName()}/market_chart?vs_currency=${currency}&days=${activeTimeFrame}&interval=${
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
    } catch (err) {
      console.log(err);
    }
  };

  const imageUrl = dataReady && data.image.small;
  const coinName = dataReady && data.name;
  const coinSymbol = dataReady && data.symbol;
  const homepage = dataReady && new URL(data.links.homepage[0]).hostname;
  const price =
    dataReady && data.market_data.current_price[currency.toLowerCase()];
  const allTimeHigh = dataReady && data.market_data.ath[currency.toLowerCase()];
  const allTimeHighDate =
    dataReady && toUTCDate(data.market_data.ath_date[currency.toLowerCase()]);
  const allTimeLow = dataReady && data.market_data.atl[currency.toLowerCase()];
  const allTimeLowDate =
    dataReady && toUTCDate(data.market_data.atl_date[currency.toLowerCase()]);
  const price_change_percentage_24h_in_currency =
    dataReady &&
    data.market_data.price_change_percentage_24h_in_currency[
      currency.toLowerCase()
    ];
  const marketCap =
    dataReady && data.market_data.market_cap[currency.toLowerCase()];
  const fullyDilutedValuation =
    dataReady &&
    data.market_data.fully_diluted_valuation[currency.toLowerCase()];
  const volume24H =
    dataReady && data.market_data.total_volume[currency.toLowerCase()];
  const currentPrice =
    dataReady && data.market_data.current_price[currency.toLowerCase()];
  const circulatingSupply = dataReady && data.market_data.circulating_supply;
  const maxSupply = dataReady && data.market_data.max_supply;
  const description = dataReady && data.description.en;
  const coinLinks = dataReady && data.links.blockchain_site;

  return (
    <>
      {!isLoading ? (
        <>
          <CoinPageContainer>
            <YourSummary
              currency={currency}
              currencySymbol={currencySymbol}
              coinName={coinName}
              coinSymbol={coinSymbol}
              imageUrl={imageUrl}
              homepage={homepage}
              price={price}
              price_change_percentage_24h_in_currency={
                price_change_percentage_24h_in_currency
              }
              allTimeHigh={allTimeHigh}
              allTimeHighDate={allTimeHighDate}
              allTimeLow={allTimeLow}
              allTimeLowDate={allTimeLowDate}
              volume24H={volume24H}
              marketCap={marketCap}
              maxSupply={maxSupply}
              circulatingSupply={circulatingSupply}
              fullyDilutedValuation={fullyDilutedValuation}
              currentPrice={currentPrice}
            />
            <CoinDescription description={description} />
            <CoinLinks coinLinks={coinLinks} />
            <StyledFlexContainer alignItems="center" flexDirection="column">
              <StyledFlexContainer
                justifyContent="space-between"
                width="512px"
                margin="0 0 23px 0"
              >
                {timeFrames.map(({ displayValue, isActive }) => (
                  <StyledRadioButton
                    changeTimeFrame={changeTimeFrame}
                    checked={isActive}
                    value={displayValue}
                  />
                ))}
              </StyledFlexContainer>
              <CurrencyConverter
                currency={currency}
                currencySymbol={currencySymbol}
                coinSymbol={coinSymbol}
                price={price}
              />
            </StyledFlexContainer>
          </CoinPageContainer>
          <StyledPriceChartContainer
            width="100%"
            currencySymbol={currencySymbol}
            dates={dates}
            prices={prices}
            isFullScreen={true}
            background="transparent"
            height="449px"
            justifyContent="end"
            alignItems="center"
          />
        </>
      ) : (
        <CoinPageContainer>
          <SpinnerCircular
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </CoinPageContainer>
      )}
    </>
  );
}
