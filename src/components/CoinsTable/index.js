import React from "react";
import axios from "axios";
import { DirectionIcon } from "../DirectionIcon";
import { TableChart } from "../TableChart";
import { StyledFlexContainer } from "../../ui";
import { StyledPercentageRounder } from "../../ui";
import { StyledCircle } from "../../ui";
import { StyledProgressContainer } from "../../ui";
import { StyledProgress } from "../../ui";

export class CoinsTable extends React.Component {
  state = {
    data: [],
    fakeDates: [...Array(169).fill(0)],
  };

  componentDidMount() {
    this.fetchTableData();
  }

  fetchTableData = async () => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({ data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { data, fakeDates } = this.state;
    const { className, currencySymbol } = this.props;
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
        <tbody>
          {data.map(
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
              <tr key={id}>
                <td>{market_cap_rank}</td>
                <td>
                  <StyledFlexContainer>
                    <img src={image}></img>
                    <span>{name}</span>
                    <span>({symbol.toUpperCase()})</span>
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
                    <StyledProgress
                      percent={(total_volume / market_cap) * 100}
                    />
                  </StyledProgressContainer>
                </td>
                <td>
                  <StyledProgressContainer width={250}>
                    <StyledProgress
                      percent={(circulating_supply / total_supply) * 100}
                    />
                  </StyledProgressContainer>
                </td>
                <td>
                  <TableChart
                    dates={fakeDates}
                    prices={price}
                    currencySymbol={currencySymbol}
                    last7d={price_change_percentage_7d_in_currency}
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    );
  }
}
