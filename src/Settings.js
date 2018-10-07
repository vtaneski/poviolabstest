import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Settings extends Component {

    onChange = (event) => {
        const state = this.props.listState;
        const oldFiatCurrency = state.fiatCurrency;
        const newFiatCurrency = event.target.value;

        // load new data if the fiat currency is changed
        if (oldFiatCurrency !== newFiatCurrency) {
            state.fiatCurrency = newFiatCurrency;
            state.newFiatCurrencySet = true;
            state.fetchData();
            state.fetchCurrencyData(state.selectedCurrency.id);
        } else {
            state.newFiatCurrencySet = false;
        }
    }

    render() {
        const oldState = this.props.listState;  
        console.log("Rendered: " + oldState.fiatCurrency);
        return (
            <div>
                <p>Select currency:</p>
                <select name="fiatCurrency" onChange={this.onChange}>
                    <option>-- select currency --</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CNY">CNY</option>
                </select>
            </div>
        );
    }
}

export default Settings;