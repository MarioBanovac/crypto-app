import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faLayerGroup,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "styled-components";
import { ReactComponent as PlusIcon } from "icons/plus.svg";
import {
  StyledFlexContainer,
  StyledSpan,
  StyledPercentageRounder,
  StyledParagraph,
  ContentContainer,
  CoinImage,
} from "ui";
import { formatCoinPrice } from "utils";
import DirectionIcon from "components/DirectionIcon";

export default function YourSummary(props) {
  const theme = useTheme();
  const {
    currencySymbol,
    coinName,
    coinSymbol,
    imageUrl,
    homepage,
    price,
    price_change_percentage_24h_in_currency,
    allTimeHigh,
    allTimeHighDate,
    allTimeLow,
    allTimeLowDate,
    volume24H,
    marketCap,
    maxSupply,
    circulatingSupply,
    fullyDilutedValuation,
    currentPrice,
  } = props;
  return (
    <>
      <h2>Your summary</h2>
      <StyledFlexContainer
        margin="0 0 50px 0"
        justifyContent="space-between"
        width="100%"
      >
        <StyledFlexContainer flexDirection="column">
          <ContentContainer
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="258px"
            height="295px"
            borderRadius="12px"
            margin="0 0 20px 0"
          >
            <CoinImage src={imageUrl} />
            <div>
              <StyledSpan fontSize="25px">{coinName} </StyledSpan>
              <StyledSpan fontSize="25px">
                ({coinSymbol?.toUpperCase()})
              </StyledSpan>
            </div>
          </ContentContainer>
          <ContentContainer
            width="258px"
            height="64px"
            borderRadius="12px"
            alignItems="center"
            justifyContent="start"
            padding="0 0 0 22px"
          >
            <a href={`http://${homepage}`} target="_blank">
              <FontAwesomeIcon icon={faLink} size={"xs"} fixedWidth />
            </a>
            <StyledSpan width={"auto"} margin={"0 0 0 34px"}>
              {homepage}
            </StyledSpan>
          </ContentContainer>
        </StyledFlexContainer>
        <ContentContainer
          flexDirection="column"
          alignItems="center"
          padding="34px 0 0 0"
          width="463px"
          height="379px"
          borderRadius="12px"
        >
          <StyledFlexContainer margin="0 0 35px 0" height="58px">
            <StyledSpan margin="0 28px 0 0" fontSize="44px">
              {formatCoinPrice(currencySymbol, price, true)}
            </StyledSpan>
            <StyledSpan>
              {price_change_percentage_24h_in_currency && (
                <>
                  <DirectionIcon
                    value={price_change_percentage_24h_in_currency}
                  />
                  <StyledPercentageRounder
                    percentage={price_change_percentage_24h_in_currency}
                  />
                </>
              )}
            </StyledSpan>
          </StyledFlexContainer>
          <div>
            <FontAwesomeIcon icon={faLayerGroup} size={"lg"} />
          </div>
          <StyledFlexContainer flexDirection="column" alignItems="start">
            <StyledFlexContainer height="48px" margin="26px 0 0 0">
              <FontAwesomeIcon color={theme.mainPositive} icon={faCaretUp} size={"lg"} />
              <StyledFlexContainer
                flexDirection="column"
                alignItems="start"
                margin="0 0 12px 12px"
              >
                <StyledParagraph fontSize="18px">
                  All Time High: {currencySymbol}
                  {allTimeHigh}
                </StyledParagraph>
                <StyledParagraph fontSize="18px">
                  {allTimeHighDate}
                </StyledParagraph>
              </StyledFlexContainer>
            </StyledFlexContainer>
            <StyledFlexContainer height="48px" marginTop="26px">
              <FontAwesomeIcon
                color={theme.mainNegative}
                icon={faCaretDown}
                size={"lg"}
              />
              <StyledFlexContainer
                flexDirection="column"
                alignItems="start"
                margin="0 0 0 12px"
              >
                <StyledParagraph fontSize="18px">
                  All Time Low: {currencySymbol}
                  {allTimeLow}
                </StyledParagraph>
                <StyledParagraph fontSize="18px">
                  {allTimeLowDate}
                </StyledParagraph>
              </StyledFlexContainer>
            </StyledFlexContainer>
          </StyledFlexContainer>
        </ContentContainer>
        <ContentContainer
          flexDirection="column"
          alignItems="start"
          padding="29px 0 0 48px"
          width="546px"
          height="379px"
          borderRadius="12px"
        >
          <StyledFlexContainer
            flexDirection="column"
            alignItems="start"
            margin="0 0 32px 0"
          >
            <StyledFlexContainer alignItems="center">
              <PlusIcon />
              <StyledSpan fontSize="18px" margin="0 0 0 15px">
                Market Cap: {formatCoinPrice(currencySymbol, marketCap, true)}
              </StyledSpan>
            </StyledFlexContainer>
            <StyledFlexContainer alignItems="center">
              <PlusIcon />
              <StyledSpan fontSize="18px" margin="0 0 0 15px">
                Fully Diluted Valuation:{" "}
                {formatCoinPrice(currencySymbol, fullyDilutedValuation, true)}
              </StyledSpan>
            </StyledFlexContainer>
            <StyledFlexContainer alignItems="center">
              <PlusIcon />
              <StyledSpan fontSize="18px" margin="0 0 0 15px">
                Volume 24h: {formatCoinPrice(currencySymbol, volume24H, true)}
              </StyledSpan>
            </StyledFlexContainer>
            <StyledFlexContainer alignItems="center">
              <PlusIcon />
              <StyledSpan fontSize="18px" margin="0 0 0 15px">
                Volume / Market:{" "}
                {formatCoinPrice(currencySymbol, volume24H / marketCap, true)}
              </StyledSpan>
            </StyledFlexContainer>
          </StyledFlexContainer>
          <StyledFlexContainer
            flexDirection="column"
            alignItems="start"
            margin="0 0 13px 0"
            height="69%"
          >
            <StyledFlexContainer alignItems="center">
              <PlusIcon />
              <StyledSpan fontSize="18px" margin="0 0 0 15px">
                Total Volume:{" "}
                {formatCoinPrice(currencySymbol, volume24H / currentPrice)}{" "}
                {coinSymbol?.toUpperCase()}
              </StyledSpan>
            </StyledFlexContainer>
            <StyledFlexContainer alignItems="center">
              <PlusIcon />
              <StyledSpan fontSize="18px" margin="0 0 0 15px">
                Circulating Supply:{" "}
                {formatCoinPrice(currencySymbol, circulatingSupply)}{" "}
                {coinSymbol?.toUpperCase()}
              </StyledSpan>
            </StyledFlexContainer>
            <StyledFlexContainer alignItems="center">
              <PlusIcon />
              <StyledSpan fontSize="18px" margin="0 0 0 15px">
                Max Supply: {formatCoinPrice(currencySymbol, maxSupply)}{" "}
                {coinSymbol?.toUpperCase()}
              </StyledSpan>
            </StyledFlexContainer>
          </StyledFlexContainer>
        </ContentContainer>
      </StyledFlexContainer>
    </>
  );
}
