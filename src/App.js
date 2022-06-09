import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import {CoinsPage, PortfolioPage } from "pages";
import CoinPage from "pages/CoinPage"
import { GlobalStyle, StyledContainer } from "ui";
import {Navbar}  from "components";
import { changeCurrency } from "store/currency/currency.actions";

function App(props) {
  const { changeCurrency } = props;

  const handleCurrencyChange = ({ target: { value } }) => {
    changeCurrency(value);
  };

  return (
    <>
      <Router>
        <GlobalStyle />
        <StyledContainer>
          <Navbar handleCurrencyChange={handleCurrencyChange} />
          <Switch>
            <Route exact path="/portfolio" render={PortfolioPage} />
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <CoinsPage {...props} />
                </>
              )}/>
            <Route exact path='/coin/:coinName' render={(props) => (
                <>
                  <CoinPage {...props} />
                </>
              )} />
          </Switch>
        </StyledContainer>
      </Router>
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  changeCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
