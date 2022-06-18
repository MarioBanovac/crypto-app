import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";
import { SpinnerCircular } from "spinners-react";
import TableChart from "components/TableChart/TableChart";
import DirectionIcon from "components/DirectionIcon/DirectionIcon";
import {
  StyledFlexContainer,
  StyledPercentageRounder,
  StyledCircle,
  StyledProgressContainer,
  StyledProgress,
  StyledCoinLink,
  StyledTableSpan,
} from "ui";
import { nFormatter, usePrevious } from "utils";
import { fetchCoins, deleteCoins } from "store/coins/coins.actions";

export default function CoinsTable(props) {
  const dispatch = useDispatch();
  const { currency, currencySymbol } = useSelector(
    (state) => state.currencyDetails
  );

  const { tableData, fakeDates } = useSelector((state) => state.coins);

  const prevValues = usePrevious(currency);

  useEffect(() => {
    if (prevValues && prevValues.currency !== currency) {
      dispatch(deleteCoins());
      dispatch(fetchCoins());
    }
  }, [currency]);

  const getCoins = () => {
    dispatch(fetchCoins());
  };
  const { className } = props;
  return (
    <table className={className}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>1h%</th>
          <th>24h%</th>
          <th>7d%</th>
          <th>24h Volume/Market Cap</th>
          <th>Circulating/Total Supply</th>
          <th>Last 7d</th>
        </tr>
      </thead>
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        hasMore={true || false}
        loadMore={getCoins}
        loader={
          <SpinnerCircular
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        }
        useWindow={true}
        element={"tbody"}
        threshold={80}
      >
        {tableData?.map(
          ({
            market_cap_rank,
            image,
            name,
            symbol,
            current_price,
            price_change_percentage_1h_in_currency,
            price_change_percentage_24h_in_currency,
            price_change_percentage_7d_in_currency,
            total_volume,
            market_cap,
            circulating_supply,
            total_supply,
            sparkline_in_7d: { price },
            id,
          }) => (
            <tr key={Math.random()}>
              <td>{market_cap_rank}</td>
              <td>
                <StyledFlexContainer>
                  <StyledCoinLink
                    name={name}
                    image={image}
                    id={id}
                    symbol={symbol}
                  />
                </StyledFlexContainer>
              </td>
              <td>
                {currencySymbol}
                {current_price}
              </td>
              <td>
                <StyledFlexContainer>
                  <DirectionIcon
                    value={price_change_percentage_1h_in_currency}
                  />
                  <StyledPercentageRounder
                    percentage={price_change_percentage_1h_in_currency}
                  />
                </StyledFlexContainer>
              </td>
              <td>
                <StyledFlexContainer>
                  <DirectionIcon
                    value={price_change_percentage_24h_in_currency}
                  />
                  <StyledPercentageRounder
                    percentage={price_change_percentage_24h_in_currency}
                  />
                </StyledFlexContainer>
              </td>
              <td>
                <StyledFlexContainer>
                  <DirectionIcon
                    value={price_change_percentage_7d_in_currency}
                  />
                  <StyledPercentageRounder
                    percentage={price_change_percentage_7d_in_currency}
                  />
                </StyledFlexContainer>
              </td>
              <td>
                <StyledProgressContainer width={250}>
                  <StyledCircle position="absolute" bottom="20px" />
                  <StyledTableSpan bottom="14px" left="15px">
                    {currencySymbol}
                    {nFormatter(total_volume, 2)}
                  </StyledTableSpan>
                  <StyledProgress
                    percent={
                      total_volume <= market_cap
                        ? (total_volume / market_cap) * 100
                        : 100
                    }
                  />
                  <StyledCircle
                    position="absolute"
                    bottom="20px"
                    right="60px"
                  />
                  <StyledTableSpan bottom="14px" right="0px">
                    {currencySymbol}
                    {nFormatter(market_cap, 2)}
                  </StyledTableSpan>
                </StyledProgressContainer>
              </td>
              <td>
                <StyledProgressContainer width={250}>
                  <StyledCircle position="absolute" bottom="20px" />
                  <StyledTableSpan bottom="14px" left="15px">
                    {currencySymbol}
                    {nFormatter(circulating_supply, 2)}
                  </StyledTableSpan>
                  <StyledProgress
                    percent={(circulating_supply / total_supply) * 100}
                  />
                  <StyledCircle
                    position="absolute"
                    bottom="20px"
                    right="60px"
                  />
                  <StyledTableSpan bottom="14px" right="0px">
                    {total_supply === null
                      ? "∞"
                      : currencySymbol + nFormatter(total_supply, 2)}
                  </StyledTableSpan>
                </StyledProgressContainer>
              </td>
              <td>
                <TableChart
                  dates={fakeDates}
                  prices={price}
                  last7d={price_change_percentage_7d_in_currency}
                />
              </td>
            </tr>
          )
        )}
      </InfiniteScroll>
    </table>
  );
}
