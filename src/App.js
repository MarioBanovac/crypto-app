import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import CoinsPage from "./pages/CoinsPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { GlobalStyle, StyledContainer } from "./ui";
import { Navbar } from "./components/Navbar";

class App extends React.Component {
  state = {
    currencyDetails: {
      currency: "",
      currencySymbol: "",
    },
  };

  componentDidMount() {
    const savedData = JSON.parse(localStorage.getItem("currencyDetails"));
    if (savedData !== null) {
      this.setState({ currencyDetails: savedData });
    } else {
      this.setState({
        currencyDetails: { currency: "usd", currencySymbol: "$" },
      });
    }
  }

  handleCurrencyChange = ({ target: { value } }) => {
    const symbols = {
      usd: "$",
      gbp: "£",
      eur: "€",
      btc: "₿",
      eth: "Ξ",
    };

    this.setState({
      currencyDetails: {
        currency: value,
        currencySymbol: symbols[value.toLowerCase()],
      },
    });
  };

  render() {
    const {
      currencyDetails: { currency, currencySymbol },
    } = this.state;
    return (
      <>
        {currency && currencySymbol && (
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
                <Route
                  path="/"
                  render={(props) => (
                    <>
                      <Redirect to="/coins" />
                      <CoinsPage
                        currencySymbol={currencySymbol}
                        currency={currency}
                        {...props}
                      />
                    </>
                  )}
                />
              </Switch>
            </StyledContainer>
          </Router>
        )}
      </>
    );
  }
}

export default App;
