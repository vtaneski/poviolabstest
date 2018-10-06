import React, { Component } from 'react';
import './App.css';
import CurrencyList from './CurrencyList';
import CurrencyState from './CurrencyState';

class App extends Component {
  render() {
    const currencyState = new CurrencyState();
    return (
      <div>
        <header className="App-header">
          
        </header>

        <div>
          <CurrencyList listState={ currencyState }/>
        </div>

      </div>
    );
  }
}

export default App;
