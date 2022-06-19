import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
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
import { formatCoinName, getActiveTimeFrame, usePrevious } from "utils";
import { getCoinData } from "store/coin/coin.actions";
import { getCharts } from "store/charts/charts.actions";

export default function CoinPage(props) {
  const dispatch = useDispatch();
  const { currency, currencySymbol } = useSelector(
    (state) => state.currencyDetails
  );
  const { dates, prices } = useSelector((state) => state.charts);
  const {
    imageUrl,
    coinName,
    coinSymbol,
    homepage,
    price,
    allTimeHigh,
    allTimeHighDate,
    allTimeLow,
    allTimeLowDate,
    price_change_percentage_24h_in_currency,
    marketCap,
    fullyDilutedValuation,
    volume24H,
    currentPrice,
    circulatingSupply,
    maxSupply,
    description,
    coinLinks,
    isLoading,
  } = useSelector((state) => state.coin);

  const [timeFrames, setTimeFrames] = useState([
    {
      isActive: true,
      value: 1,
      displayValue: "1d",
    },
    {
      isActive: false,
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
    dispatch(getCharts(getActiveTimeFrame(timeFrames)));
  }, []);

  useEffect(() => {
    if (
      prevValues?.currencySymbol !== currencySymbol ||
      prevValues?.timeFrames !== timeFrames
    ) {
      dispatch(getCharts(getActiveTimeFrame(timeFrames)));
    }
  }, [currencySymbol, timeFrames]);

  useEffect(() => {
    dispatch(getCoinData(getCoinName()));
  }, []);

  useEffect(() => {
    dispatch(getCoinData(getCoinName()));
  }, [currency]);

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
