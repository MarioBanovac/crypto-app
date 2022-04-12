import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
