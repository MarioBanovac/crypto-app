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
} from "./ui";
import { SearchContainer } from "./components/SearchContainer";
import "./App.css";

class App extends React.Component {
  state = {};

  render() {
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
