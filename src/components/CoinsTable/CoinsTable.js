import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
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

export default function CoinsTable(props) {
  const { currency, currencySymbol } = useSelector(
    (state) => state.currencyDetails
  );
  const [tableData, setTableData] = useState([]);
  const [fakeDates] = useState([...Array(169).fill(0)]);
  const [page, setPage] = useState(1);
  const [currencyChanged, setCurrencyChanged] = useState(false);
  const prevValues = usePrevious(currency);

  useEffect(() => {
    if (prevValues && prevValues.currency !== currency) {
      setTableData([]);
      setPage(1);
      setCurrencyChanged(true);
    }
  }, [currency]);

  useEffect(() => {
    if (currencyChanged) {
      fetchTableData();
    }
  }, [currencyChanged]);

  const fetchTableData = async () => {
    try {
      const { data } = await axios(
        `${process.env.REACT_APP_API_ENDPOINT}/coins/markets?vs_currency=${
          currency || "usd"
        }&order=market_cap_desc&per_page=15&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      setTableData((prevTableData) => {
        return prevTableData.concat(data);
      });
      setPage((prevPage) => prevPage + 1);
      currencyChanged && setCurrencyChanged(false);
    } catch (err) {
      console.log(err);
    }
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
        loadMore={fetchTableData}
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
