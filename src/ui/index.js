import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import { CurrencyChanger } from "../components/CurrencyChanger";
import { MarketData } from "../components/MarketData";
import { PriceChartContainer } from "../components/PriceChartContainer";
import { VolumeChartContainer } from "../components/VolumeChartContainer";
import { TimeFrameChanger } from "../components/TimeFrameChanger";
import Polygon from "../icons/polygon.svg";
import Theme from "../icons/theme.svg";
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Poppins', sans-serif;
  background:#191B1F;
  color:#fff;
  height:100vh;
}

ul{
  list-style-type:none;
}

a{
  cursor:pointer;
  text-decoration:none;
  color:currentColor;
}
`;

export const StyledContainer = styled.div`
  max-width: 1920px;
  max-height: 1848px;
  text-align: center;
  height: 100vh;
  border: 10px solid #191B1F;
  margin 0 auto;
  background:#1F2128;
`;

export const StyledNavbar = styled.nav`
  max-width: 1900px;
  height: 130px;
  background: #191b1f;
`;

export const StyledNavList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #191b1f;
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
  color: #fff;
  font-size: ${(props) => (props.children === "Coins" ? "23px" : "22px")};
  border-radius: 10px;
  padding: ${(props) =>
    props.children === "Coins" ? "12px 60px 14px 51px" : "12px 63px 15px 56px"};
  &.active {
    background: #2c2f36;
  }
`;

export const StyledSearchContainer = styled.div`
  width: 510px;
  height: 63px;
  background: #2c2f36;
  border-radius: 10px;
  margin-right: 27px;
  padding-top: 19.5px;
  padding-bottom: 20.4px;
  padding-left: 21.4px;
  position: relative;

  input {
    color: #fafbfb;
    background: none;
    border: 0;
    margin-left: 10px;
    padding-top: 3px;
    caret-color: #fafbfb;
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
    color: #fafbfb;
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
  background: #2c2f36;
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
    background: #191b1f;
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
  background: #2c2f36;
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
  background: #2c2f36;
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
    background: #191b1f;
    font-size: 17px;
    color: #00ff5f;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: none;
    border: none;
    font-size: inherit;
    padding-right: 17px;
    color: #fff;
    background-image: url(${Polygon});
    background-repeat: no-repeat;
    background-position: calc(100% - 3px) center;
    background-size: 10px;
  }

  select:focus {
    outline: none;
  }
  select option {
    background: #2c2f36;
  }
`;

export const StyledThemeChanger = styled.div`
  width: 67px;
  height: 63px;
  background: #2c2f36;
  border-radius: 10px;
  background-image: url(${Theme});
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 3px;
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
  background: #191b1f;
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
  height: ${({ height }) => (height ? height : "8px")};
  width: ${({ width }) => (width ? width : "8px")};
  background-color: ${({ background }) => (background ? background : "#fff")};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : "13px")};
  border-radius: 50%;
  display: inline-block;
`;

export const StyledProgressContainer = styled.div`
  position: relative;
  width: ${({ width }) => width}px;
  background-color: #2172e5;
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
  background: #fff;
  width: ${({ percent }) => percent}%;
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

export const StyledChartsContainer = styled.div`
  display: flex;
  gap: 45px;
  margin-bottom: 60px;
`;

export const StyledPriceChartContainer = styled(PriceChartContainer)`
  display: flex;
  flex-direction: column;

  width: 833px;
  height: 449px;
  border-radius: 10px;
  background: #191b1f;
  padding-top: 16px;
  text-align: left;
  position: relative;

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
    width: 90%;
  }
`;

export const StyledVolumeChartContainer = styled(VolumeChartContainer)`
  display: flex;
  flex-direction: column;

  width: 833px;
  height: 449px;
  border-radius: 10px;
  background: #191b1f;
  padding-top: 16px;
  text-align: left;
  position: relative;

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
    width: 90%;
  }
`;

export const StyledTimeFrameChanger = styled(TimeFrameChanger)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #2c2d33;
  max-width: 550px;
  height: 60px;
  margin: 0 auto;
  padding: 0 10px;
  border-radius: 10px;
`;

export const StyledTimeFrame = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  background: ${({ isActive }) => (isActive ? "#00FF5F" : "transparent")};
`;
