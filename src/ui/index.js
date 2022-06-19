import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import NumberFormat from "react-number-format";
import {
  CurrencyChanger,
  MarketData,
  ChartsContainer,
  PriceChartContainer,
  VolumeChartContainer,
  CoinsTableContainer,
  TimeFrameChanger,
  CoinsTable,
  CoinLink,
  PercentageRounder,
  RadioButton,
  ScrollToTop,
} from "components";
import { isThemeDark, isThemeLight } from "utils";
import Polygon from "icons/polygon.svg";
import darkTheme from "icons/darkTheme.svg";
import lightTheme from "icons/lightTheme.svg";

export const DarkTheme = {
  name: "darkTheme",
  main: "#191B1F",
  secondary: "#1F2128",
  tertiary: "#2c2f36",
  textColor: "#fff",
  mainPositive: "#00FF5F",
  secondaryPositive: "#009719",
  tertiaryPositive: "#06D554",
  mainNegative: "#FE1040",
  mainNeutral: "#2172e5",
  transparentDark: "rgba(0,0,0,0)",
  primaryTopGradient: "rgba(0,255,95,0.15)",
  secondaryTopGradient: "rgba(64,64,64,1)",
  bottomGradient: "rgba(25,27,31,0.15)",
};

export const LightTheme = {
  main: "#FFF",
  secondary: "#FCFCFC",
  tertiary: "#eee",
  textColor: "#2C2F36",
  mainPositive: "#06D554",
  secondaryPositive: "#009719",
  tertiaryPositive: "#06D554",
  mainNegative: "#FE1040",
  mainNeutral: "#2172e5",
  transparentDark: "rgba(0,0,0,0)",
  primaryTopGradient: "rgba(37,80,234,0.41)",
  secondaryTopGradient: "rgba(64,64,64,1)",
  bottomGradient: "rgba(255,255,255,0.15)",
  name: "lightTheme",
};

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Poppins', sans-serif;
  background:${({ theme }) => theme.main};
  color:${({ theme }) => theme.textColor};
  height:100vh;
  overflow-y:auto;
  overflow-x:hidden;

  input:focus {
    outline: none;
  } 

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

  &::-webkit-scrollbar {
    width: 10px;
}


&::-webkit-scrollbar-thumb {
  background-color:${({ theme }) => theme.mainNeutral};
  border-radius:8px;
}
}

ul{
  list-style-type:none;
}

a{
  cursor:pointer;
  text-decoration:none;
  color:currentColor;
}

::selection{
  color:${({ theme }) =>
    isThemeLight(theme) ? theme.mainNeutral : theme.mainPositive};
}
`;

export const StyledContainer = styled.div`
  max-width: 1920px;
  text-align: center;
  height: 100%;
  border:10px solid ${({ theme }) => theme.main};
  margin 0 auto;
  background:${({ theme }) => theme.secondary};
`;

export const StyledNavbar = styled.nav`
  max-width: 1900px;
  height: 130px;
  background: ${({ theme }) => theme.main};
`;

export const StyledNavList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.main};
  padding-left: 95px;
  border-radius: 10px 10px 0 0;
  & > li:nth-child(1) {
    margin-right: 31px;
  }
  & > li:nth-child(2) {
    margin-right: auto;
  }
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.textColor};
  font-size: ${(props) => (props.children === "Coins" ? "23px" : "22px")};
  border-radius: 10px;
  padding: ${(props) =>
    props.children === "Coins" ? "12px 60px 14px 51px" : "12px 63px 15px 56px"};
  &.active {
    background: ${({ theme }) => theme.tertiary};
  }
`;

export const StyledSearchContainer = styled.div`
  width: 510px;
  height: 63px;
  background: ${({ theme }) => theme.tertiary};
  border-radius: 10px;
  margin-right: 27px;
  padding-top: 19.5px;
  padding-bottom: 20.4px;
  padding-left: 21.4px;
  position: relative;

  input {
    color: ${({ theme }) => theme.textColor};
    background: none;
    border: 0;
    margin-left: 10px;
    padding-top: 3px;
    caret-color: ${({ theme }) => theme.textColor};
    font-size: 18px;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: ${({ theme }) => theme.textColor};
    font-size: 18px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

export const StyledUl = styled.ul`
  position: absolute;
  z-index: 100;
  content: "";
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-radius: 0 0 8px 8px;
  width: 300px;
  font-size: 18px;
  padding-bottom: 6px;
  li {
    cursor: pointer;
    padding: 10px 0;
  }

  li:hover {
    background: ${({ theme }) => theme.main};
    width: 90%;
    border-radius: 8px;
  }
`;

export const StyledLoadingList = styled.div`
  position: absolute;
  content: "";
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.tertiary};
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 0 0 8px 8px;
  width: 300px;
  font-size: 18px;
`;

export const StyledCurrencyChanger = styled(CurrencyChanger)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.tertiary};
  gap: 12.5px;
  width: 135px;
  height: 63px;
  border-radius: 10px;
  font-size: 17px;
  margin-right: 25px;

  div:first-child {
    background: red;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    background: #000;
    font-size: 17px;
    color: ${({ theme }) => theme.mainPositive};
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    padding-right: 17px;
    color: ${({ theme }) => theme.textColor};
    background-image: url(${Polygon});
    background-repeat: no-repeat;
    background-position: calc(100% - 3px) center;
    background-size: 10px;
  }

  select:focus {
    outline: none;
  }
  select option {
    background: ${({ theme }) => theme.tertiary};
  }
`;

export const StyledThemeChanger = styled.div`
  width: 67px;
  height: 63px;
  background: ${({ theme }) => theme.tertiary};
  border-radius: 10px;
  background-image: url(${({ theme }) =>
    isThemeDark(theme) ? darkTheme : lightTheme});
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 3px;
  cursor: pointer;
`;

export const StyledMarketData = styled(MarketData)`
  font-size: 17px;
  top: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 926px;
  height: 55px;
  border-radius: 0 0 10px 10px;
  background: ${({ theme }) => theme.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 53px;
  padding-right: 43px;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export const StyledCircle = styled.div`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  height: ${({ height }) => (height ? height : "8px")};
  width: ${({ width }) => (width ? width : "8px")};
  background-color: ${({ background, theme }) =>
    background ? background : theme.textColor};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "13px")};
  border-radius: 50%;
  display: inline-block;
`;

export const StyledProgressContainer = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  background-color: ${({ theme }) => theme.mainNeutral};
  height: 13px;
  border-radius: 10px;
  border: none;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "0")}px;
`;

export const StyledProgress = styled.div`
  height: 100%;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.textColor};
  width: ${({ percent }) => (percent === Infinity ? 100 : percent)}%;
  min-width: ${({ percent }) => (percent < 2 ? "2" : percent)}%;
`;

export const CoinsPageContainer = styled.div`
  width: 100%;
  margin-top: 79px;
  padding-right: 99px;
  padding-left: 95px;

  h1 {
    font-size: 22px;
    text-align: left;
    font-weight: 400;
    margin-bottom: 32px;
  }
`;

export const StyledChartsContainer = styled(ChartsContainer)`
  gap: 45px;
  margin-bottom: 60px;
`;

export const StyledPriceChartContainer = styled(PriceChartContainer)`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "833px")};
  height: ${({ height }) => height};
  border-radius: 10px;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  background: ${({ isFullScreen, theme }) =>
    isFullScreen ? theme.secondary : theme.main};
  padding: ${({ padding }) => padding};
  text-align: left;
  position: relative;
  border-radius: 12px;
  box-shadow: 0px 0px 13px -14px rgba(0, 0, 0, 0.34);
  -webkit-box-shadow: 0px 0px 13px -14px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 0px 0px 13px -14px rgba(0, 0, 0, 0.34);

  p {
    margin-bottom: 4px;
    padding-left: 21px;
  }

  p:first-of-type {
    font-size: 22px;
  }

  p:nth-of-type(2n) {
    font-size: 44px;
  }

  p:nth-of-type(3n) {
    font-size: 22px;
  }

  div {
    height: 70%;
    align-self: center;
    width: 100%;
  }
`;

export const StyledVolumeChartContainer = styled(VolumeChartContainer)`
  display: flex;
  flex-direction: column;

  width: 833px;
  height: 449px;
  border-radius: 12px;
  background: ${({ theme }) => theme.main};
  padding-top: 16px;
  padding-right: 21px;
  text-align: left;
  position: relative;
  box-shadow: 0px 0px 13px -14px rgba(0, 0, 0, 0.34);
  -webkit-box-shadow: 0px 0px 13px -14px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 0px 0px 13px -14px rgba(0, 0, 0, 0.34);

  p {
    margin-bottom: 4px;
    padding-left: 21px;
  }

  p:first-of-type {
    font-size: 22px;
  }

  p:nth-of-type(2n) {
    font-size: 44px;
  }

  p:nth-of-type(3n) {
    font-size: 22px;
  }

  div {
    height: 70%;
    align-self: center;
    width: 100%;
  }
`;

export const StyledTimeFrameChanger = styled(TimeFrameChanger)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.tertiary};
  max-width: 550px;
  height: 60px;
  margin: 0 auto 20px auto;
  padding: 0 10px;
  border-radius: 10px;
`;

export const StyledTimeFrame = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  background: ${({ isActive, theme }) =>
    isActive ? theme.mainPositive : "transparent"};
`;

export const StyledCoinsTableContainer = styled(CoinsTableContainer)`
  max-width: 1712px;
  min-height: 951px;
  background: ${({ theme }) => theme.main};
  padding: 0 21px 21px 21px;
  border-radius: 10px;
`;

export const StyledCoinsTable = styled(CoinsTable)`
  width: 100%;
  height: 100%;
  text-align: left;
  border-collapse: collapse;
  overflow: auto;

  thead {
    position: sticky;
    top: 0;
    z-index: 3;
  }

  thead th {
    padding-top: 45px;
    padding-bottom: 21px;
    background: ${({ theme }) => theme.main};
  }

  tbody {
    width: 100%;
  }

  tr {
    border-bottom: 0.5px solid ${({ theme }) => theme.tertiary};
    height: 95px;
  }

  thead tr:first-child {
    border: none;
  }

  thead th:first-child {
    width: 35px;
  }

  thead th:nth-child(2) {
    width: 370px;
  }

  thead th:nth-child(3) {
    width: 150px;
  }

  thead th:nth-child(n + 4):nth-child(-n + 6) {
    width: 100px;
  }

  thead th:nth-child(n + 7):nth-child(-n + 8) {
    width: 300px;
  }

  div img {
    width: 30px;
    height: auto;
    margin-right: 16px;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) => justifyContent};
  height: ${({ height }) => (height ? height : "100%")};
  width: ${({ width }) => width};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  text-align: ${({ textAlign }) => textAlign};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  max-width: ${({ maxWidth }) => maxWidth};
`;

export const StyledPercentageRounder = styled(PercentageRounder)`
  color: ${({ percentage, theme }) =>
    percentage >= 0 ? theme.mainPositive : theme.mainNegative};
`;

export const StyledTableChartContainer = styled.div`
  width: 127px;
  height: 70px;
`;

export const StyledCoinLink = styled(CoinLink)`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const StyledTableSpan = styled.span`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
`;

export const CoinPageContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  padding-right: 237px;
  padding-left: 259px;

  h2 {
    font-size: 22px;
    text-align: left;
    font-weight: 400;
    margin-bottom: 53px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.textColor};
  text-align: ${({ textAlign }) => textAlign};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  flex: ${({ flex }) => flex};
`;

export const CoinImage = styled.img`
  padding: 30px;
  background: ${({ theme }) => theme.secondary};
  border-radius: 12px;
  margin-bottom: 10px;
`;

export const StyledSpan = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  line-height: ${({ lineHeight }) => lineHeight};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export const StyledParagraph = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  line-height: ${({ lineHeight }) => lineHeight};
  a {
    color: ${({ theme }) => theme.mainPositive};
  }
`;

export const StyledRadioButton = styled(RadioButton)`
  input[type="radio"] {
    width: 27px;
    height: 27px;
    margin-right: 8px;
    background-color: transparent;
    border: 0.0825em solid ${({ theme }) => theme.mainPositive};
    border-radius: 50%;
    box-shadow: inset 0 0 0 0 ${({ theme }) => theme.textColor};
    cursor: pointer;
    font: inherit;
    height: 2em;
    outline: none;
    width: 2em;
    -moz-appearance: none;
    -webkit-appearance: none;
    &:checked {
      background-color: ${({ theme }) => theme.mainPositive};
      box-shadow: inset 0 0 0 0.1875em ${({ theme }) => theme.secondaryPositive};
      -webkit-transition: background 0.15s, box-shadow 0.1s;
      transition: background 0.15s, box-shadow 0.1s;
    }
  }
`;

export const StyledNumberFormat = styled(NumberFormat)`
  font-size: ${({ fontSize }) => fontSize};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  caret-color: ${({ caretColor }) => caretColor};
  color: ${({ color }) => color};
`;

export const StyledScrollToTop = styled(ScrollToTop)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.mainPositive};
`;
