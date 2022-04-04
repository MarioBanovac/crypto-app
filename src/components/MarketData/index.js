import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as BitcoinLogo } from "../../icons/bitcoin.svg";
import { ReactComponent as EthereumLogo } from "../../icons/ethereum.svg";
import {
  StyledCircle,
  StyledProgressContainer,
  StyledProgress,
} from "../../ui";
import { nFormatter } from "../../utils/nFormatter";

export class MarketData extends React.Component {
  state = {
    isLoading: true,
    active_cryptocurrencies: "",
    markets: "",
    total_market_cap: "",
    market_cap_change_percentage_24h_usd: "",
  };

  componentDidMount() {
    this.getNavbarMarketData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currency !== this.props.currency) {
      this.getNavbarMarketData();
    }
  }

  getNavbarMarketData = async () => {
    const { currency } = this.props;
    try {
      this.setState({ isLoading: true });
      const {
        data: {
          data: {
            active_cryptocurrencies,
            markets,
            total_market_cap,
            market_cap_change_percentage_24h_usd,
            total_volume,
            market_cap_percentage: { btc, eth },
          },
        },
      } = await axios("https://api.coingecko.com/api/v3/global");
      this.setState({
        active_cryptocurrencies,
        markets,
        total_market_cap: total_market_cap[currency.toLowerCase()],
        market_cap_change_percentage_24h_usd,
        total_volume: total_volume[currency.toLowerCase()],
        isLoading: false,
        bitcoinPercentage: btc,
        ethereumPercentage: eth,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      isLoading,
      active_cryptocurrencies,
      markets,
      total_market_cap,
      market_cap_change_percentage_24h_usd,
      total_volume,
      bitcoinPercentage,
      ethereumPercentage,
    } = this.state;
    const { currencySymbol } = this.props;
    return (
      !isLoading && (
        <div className={this.props.className}>
          <div>Coins {active_cryptocurrencies}</div>
          <div>Exchange {markets}</div>
          <div>
            <StyledCircle />
            {currencySymbol}
            {nFormatter(total_market_cap, 2)}
            <FontAwesomeIcon
              icon={
                market_cap_change_percentage_24h_usd > 0
                  ? faCaretUp
                  : faCaretDown
              }
              color={market_cap_change_percentage_24h_usd > 0 ? "green" : "red"}
              size={"xs"}
              fixedWidth
            />
          </div>
          <div>
            <StyledCircle />
            {currencySymbol}
            {nFormatter(total_volume, 2)}
            <StyledProgressContainer width={80} marginLeft={10}>
              <StyledProgress
                percent={(total_volume / total_market_cap) * 100}
              />
            </StyledProgressContainer>
          </div>
          <div>
            <BitcoinLogo />
            {Math.round(bitcoinPercentage) + "%"}
            <StyledProgressContainer width={80} marginLeft={5}>
              <StyledProgress percent={bitcoinPercentage} />
            </StyledProgressContainer>
          </div>
          <div>
            <EthereumLogo />
            {Math.round(ethereumPercentage) + "%"}
            <StyledProgressContainer width={80} marginLeft={5}>
              <StyledProgress percent={ethereumPercentage} />
            </StyledProgressContainer>
          </div>
        </div>
      )
    );
  }
}
