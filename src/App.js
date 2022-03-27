import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Poppins', sans-serif;
}

ul{
  list-style-type:none;
}

a{
  cursor:pointer;
  text-decoration:none;
  color:currentColor;
}
`;

class App extends React.Component {
  state = {};
  render() {
    return (
      <Router>
        <GlobalStyle />
        <div className="App">
          <div>
            <nav>
              <ul>
                <li>
                  <Link exact to="/">
                    Coins
                  </Link>
                </li>
                <li>
                  <Link exact to="/portfolio">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/portfolio">
                <h1>Portfolio</h1>
              </Route>
              <Route path="/">
                <h1>Coins</h1>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
