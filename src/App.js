import React, { Component } from 'react';
import './App.css';
import CurrencyList from './CurrencyList';
import CurrencyState from './CurrencyState';
import Settings from './Settings';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    const currencyState = new CurrencyState();
    return (
      <Router>
        <div>
          <header className="App-header">
            <h1>Currency Tracker</h1>
          </header>

          <div>
              <Link to="/"><button>Home</button></Link>
              <Link to="/settings"><button>Settings</button></Link>
          </div>

          <Route exact path="/" component={(props) => <CurrencyList {...props} listState={currencyState} />} />
          <Route path="/settings" component={Settings} />

        </div>
      </Router>
    );
  }
}

export default App;
