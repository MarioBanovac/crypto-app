import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";
import { ReactComponent as BitcoinLogo } from "../../icons/bitcoin.svg";
import { ReactComponent as EthereumLogo } from "../../icons/ethereum.svg";
import {
  StyledCircle,
  StyledProgressContainer,
  StyledProgress,
} from "../../ui";
import { numberFormatter, usePrevious } from "../../utils";

export default function MarketData(props) {
  const theme = useTheme();
  const { currency } = useSelector((state) => state.currencyDetails);
  const { currencySymbol } = useSelector((state) => state.currencyDetails);
  const prevValues = usePrevious(currency);
  const [active_cryptocurrencies, setActive_Cryptocurrencies] = useState("");
  const [markets, setMarkets] = useState("");
  const [total_market_cap, setTotal_Market_Cap] = useState("");
  const [total_volume, setTotal_Volume] = useState("");
  const [
    market_cap_change_percentage_24h_usd,
    setMarket_Cap_Change_Percentage_24h_Usd,
  ] = useState("");
  const [bitcoinPercentage, setBitcoinPercentage] = useState("");
  const [ethereumPercentage, setEthereumPercentage] = useState("");

  useEffect(() => {
    getNavbarMarketData();
  }, []);

  useEffect(() => {
    if (prevValues && prevValues.currency !== currency) {
      getNavbarMarketData();
    }
  }, [currency]);

  const getNavbarMarketData = async () => {
    try {
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
      } = await axios(`${process.env.REACT_APP_API_ENDPOINT}/global`);
      setActive_Cryptocurrencies(active_cryptocurrencies);
      setMarkets(markets);
      setTotal_Market_Cap(total_market_cap[currency.toLowerCase()]);
      setMarket_Cap_Change_Percentage_24h_Usd(
        market_cap_change_percentage_24h_usd
      );
      setTotal_Volume(total_volume[currency.toLowerCase()]);
      setBitcoinPercentage(btc);
      setEthereumPercentage(eth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={props.className}>
      <div>Coins {active_cryptocurrencies}</div>
      <div>Exchange {markets}</div>
      <div>
        <StyledCircle />
        {currencySymbol}
        {numberFormatter(total_market_cap, 2)}
        <FontAwesomeIcon
          icon={
            market_cap_change_percentage_24h_usd > 0 ? faCaretUp : faCaretDown
          }
          color={
            market_cap_change_percentage_24h_usd > 0
              ? theme.mainPositive
              : theme.mainNegative
          }
          size={"xs"}
          fixedWidth
        />
      </div>
      <div>
        <StyledCircle />
        {currencySymbol}
        {numberFormatter(total_volume, 2)}
        <StyledProgressContainer width={80} marginLeft={10}>
          <StyledProgress percent={(total_volume / total_market_cap) * 100} />
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
  );
}
