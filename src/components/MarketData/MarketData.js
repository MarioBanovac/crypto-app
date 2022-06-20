import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { getNavbarMarketData } from "store/marketData/marketData.actions";

export default function MarketData(props) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { currency } = useSelector((state) => state.currencyDetails);
  const { currencySymbol } = useSelector((state) => state.currencyDetails);
  const {
    active_cryptocurrencies,
    markets,
    total_market_cap,
    market_cap_change_percentage_24h_usd,
    total_volume,
    bitcoinPercentage,
    ethereumPercentage,
  } = useSelector((state) => state.marketData);
  const prevValues = usePrevious(currency);

  useEffect(() => {
    dispatch(getNavbarMarketData());
  }, []);

  useEffect(() => {
    if (prevValues && prevValues.currency !== currency) {
      dispatch(getNavbarMarketData());
    }
  }, [currency]);

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
