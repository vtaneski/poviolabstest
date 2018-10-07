import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './CurrencyList.css';

@observer
class CurrencyInfo extends Component {

    onRefresh = () => {
        console.log("Refreshing...");
        // retrieve data for specific item
        const currencyId = parseInt(this.props.match.params.id);
        this.props.listState.fetchCurrencyData(currencyId);
    }

    render() {
        // convert the string parameter into number, for easier filtering     
        const currencyId = parseInt(this.props.match.params.id);
        const state = this.props.listState;  
        var selectedCurrency = {}; 

        if (state.selectedCurrency.name !== undefined) {
            console.log("Selected currency already set");
            selectedCurrency = Object.assign({}, state.selectedCurrency);
        } else {
            console.log("Selected currency Not set");
            // read item data from state list
            selectedCurrency = this.props.listState.getSelectedItem(currencyId)[0]
        }

        console.log("Refreshed!");
                 
        return (
            <div>
                <div class="refresh">
                    <button onClick={this.onRefresh}>Refresh</button>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>Rank</td>
                            <td>Name</td>
                            <td>Symbol</td>
                            <td>Price</td>
                            <td>1h change</td>
                            <td>24h change</td>
                            <td>7d change</td>
                            <td>Total supply</td>
                            <td>Available supply</td>
                        </tr>
                        <tr>
                            <td>{selectedCurrency.rank}</td>
                            <td>{selectedCurrency.name}</td>
                            <td>{selectedCurrency.symbol}</td>
                            <td>{selectedCurrency.quotes.USD.price}</td>
                            <td>{selectedCurrency.quotes.USD.percent_change_1h}</td>
                            <td>{selectedCurrency.quotes.USD.percent_change_24h}</td>
                            <td>{selectedCurrency.quotes.USD.percent_change_7d}</td>
                            <td>{selectedCurrency.total_supply}</td>
                            <td>{selectedCurrency.circulating_supply}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CurrencyInfo;