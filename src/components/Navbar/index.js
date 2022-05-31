import React from "react";
import { useSelector } from "react-redux";
import { SearchContainer } from "../SearchContainer";
import {
  StyledNavList,
  StyledNavbar,
  StyledLink,
  StyledCurrencyChanger,
  StyledThemeChanger,
  StyledMarketData,
} from "../../ui";

export const Navbar = (props) => {
  const {currency,currencySymbol} = useSelector((state)=>state.currencyDetails)
  const {handleCurrencyChange } = props;
  return (
    <StyledNavbar>
      <StyledNavList>
        <li>
          <StyledLink exact to="/coins">
            Coins
          </StyledLink>
        </li>
        <li>
          <StyledLink exact to="/portfolio">
            Portfolio
          </StyledLink>
        </li>
        <SearchContainer />
        <StyledCurrencyChanger
          currency={currency}
          currencySymbol={currencySymbol}
          handleCurrencyChange={handleCurrencyChange}
        />
        <StyledThemeChanger />
        <StyledMarketData currency={currency} currencySymbol={currencySymbol} />
      </StyledNavList>
    </StyledNavbar>
  );
};
