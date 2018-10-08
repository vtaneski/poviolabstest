import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyList from './CurrencyList';
import CurrencyState from './CurrencyState';

it('renders without crashing', () => {
    const currencyState = new CurrencyState();
    currencyState.fetchData();

    const div = document.createElement('div');
    ReactDOM.render(<CurrencyList listState={currencyState} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
