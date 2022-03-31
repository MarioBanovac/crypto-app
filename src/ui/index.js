import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import { CurrencyChanger } from "../components/CurrencyChanger";
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
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #191b1f;
  padding-left: 95px;
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

export const StyledSearchList = styled.ul`
  position: absolute;
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
