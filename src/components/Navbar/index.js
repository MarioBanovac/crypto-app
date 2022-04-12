import React from "react";
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
  const { currency, currencySymbol, handleCurrencyChange } = props;
  return (
    <StyledNavbar>
      <StyledNavList>
        <li>
          <StyledLink exact to="/">
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
