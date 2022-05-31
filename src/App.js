import React from "react";
import { connect, useSelector } from "react-redux";
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
import { changeCurrency } from "./store/currency/currency.actions";


function App(props) {
  const {changeCurrency} = props;
  const { currency, currencySymbol } = useSelector(
    (state) => state.currencyDetails
  );

  const handleCurrencyChange = ({ target: { value } }) => {
    changeCurrency(value);
  };

  return (
    <>
      {currency && currencySymbol && (
        <Router>
          <GlobalStyle />
          <StyledContainer>
            <Navbar
              currency={currency}
              currencySymbol={currencySymbol}
              handleCurrencyChange={handleCurrencyChange}
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
  // }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  changeCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
