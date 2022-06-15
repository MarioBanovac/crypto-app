import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { SearchContainer } from "components";
import {
  StyledNavList,
  StyledNavbar,
  StyledLink,
  StyledCurrencyChanger,
  StyledThemeChanger,
  StyledMarketData,
} from "ui";
import { changeActiveTheme } from "store/theme/theme.actions";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const { currency, currencySymbol } = useSelector(
    (state) => state.currencyDetails
  );


  const changeTheme = ()=>{
    dispatch(changeActiveTheme())
  }

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
        />
        <StyledThemeChanger onClick={changeTheme} />
        <StyledMarketData currency={currency} currencySymbol={currencySymbol} />
      </StyledNavList>
    </StyledNavbar>
  );
}
