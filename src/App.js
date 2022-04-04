import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinsPage } from "./pages/CoinsPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { GlobalStyle, StyledContainer } from "./ui";
import { Navbar } from "./components/Navbar";

class App extends React.Component {
  state = {
    currency:
      JSON.parse(localStorage.getItem("currencyDetails"))?.currency || "USD",
    currencySymbol:
      JSON.parse(localStorage.getItem("currencyDetails"))?.currencySymbol ||
      "$",
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
          <Navbar
            currency={currency}
            currencySymbol={currencySymbol}
            handleCurrencyChange={this.handleCurrencyChange}
          />
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
