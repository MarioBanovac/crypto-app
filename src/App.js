import React from "react";
import { connect, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoinsPage, PortfolioPage } from "pages";
import CoinPage from "pages/CoinPage";
import { GlobalStyle, StyledContainer } from "ui";
import { Navbar } from "components";

function App(props) {
  const theme = useSelector((state) => state.theme);
  const isDarkTheme = theme.darkThemeEnabled;
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? theme.darkTheme : theme.lightTheme}>
        <Router>
          <GlobalStyle />
          <StyledContainer>
            <Navbar />
            <Switch>
              <Route exact path="/portfolio" render={PortfolioPage} />
              <Route
                exact
                path="/"
                render={(props) => (
                  <>
                    <CoinsPage {...props} />
                  </>
                )}
              />
              <Route
                exact
                path="/coin/:coinName"
                render={(props) => (
                  <>
                    <CoinPage {...props} />
                  </>
                )}
              />
            </Switch>
          </StyledContainer>
        </Router>
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
