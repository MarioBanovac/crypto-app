import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinsPage } from "./pages/CoinsPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import {
  GlobalStyle,
  StyledContainer,
  StyledNavList,
  StyledNavbar,
  StyledLink,
  StyledCurrencyChanger,
  StyledThemeChanger,
} from "./ui";
import { SearchContainer } from "./components/SearchContainer";
import "./App.css";

class App extends React.Component {
  state = {
    currency: "USD",
    currencySymbol: "$",
  };

  handleCurrencyChange = ({ target: { value } }) => {
    switch (value) {
      case "USD":
        this.setState({ currency: value, currencySymbol: "$" });
        break;
      case "GBP":
        this.setState({ currency: value, currencySymbol: "£" });
        break;
      case "EUR":
        this.setState({ currency: value, currencySymbol: "€" });
        break;
      case "BTC":
        this.setState({ currency: value, currencySymbol: "₿" });
        break;
      case "ETH":
        this.setState({ currency: value, currencySymbol: "Ξ" });
        break;
    }
  };

  render() {
    const { currency, currencySymbol } = this.state;
    return (
      <Router>
        <GlobalStyle />
        <StyledContainer>
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
                handleCurrencyChange={this.handleCurrencyChange}
              />
              <StyledThemeChanger />
            </StyledNavList>
          </StyledNavbar>
          <Switch>
            <Route
              path="/portfolio"
              render={(props) => <PortfolioPage {...props} />}
            />
            <Route path="/" render={(props) => <CoinsPage {...props} />} />
          </Switch>
        </StyledContainer>
      </Router>
    );
  }
}

export default App;
