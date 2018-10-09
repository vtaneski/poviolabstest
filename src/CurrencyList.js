import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CurrencyList.css';

@observer
class CurrencyList extends Component {

    componentDidMount() {
        if (this.props.listState.newFiatCurrencySet) {
            this.props.listState.fetchData();
        }
    }

    onRefresh = () => {
        console.log("Refresh button clicked");
        this.props.listState.fetchData();
    }

    render() {
        const state = this.props.listState;
        const fiatCurrency = state.fiatCurrency;
        
        return (
            <div>
                <div className="refresh">
                    <button onClick={this.onRefresh}>Refresh</button>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Rank</td>
                            <td>Symbol</td>
                            <td>Price ({fiatCurrency})</td>
                            <td>24h change</td>
                            <td></td>
                        </tr>
                        {state.list.map(item => <CurrencyItem item={item} state={state} key={item.id} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CurrencyList;

@observer
class CurrencyItem extends Component {

    onClick = () => {
        const selectedCurrencyId = this.props.item.id;
        this.props.state.fetchCurrencyData(selectedCurrencyId);
    }

    render() {
        const item = this.props.item;
        const fiatCurrency = this.props.state.fiatCurrency;
        const quotes = item.quotes[fiatCurrency];

        return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.rank}</td>
                <td>{item.symbol}</td>
                <td>{quotes.price}</td>
                <td>{quotes.percent_change_24h}</td>
                <td>
                    <Link
                        to={{
                            pathname: '/currencyinfo/' + item.id
                        }}
                    >
                        <button onClick={this.onClick}>Details</button>
                    </Link></td>
            </tr >
        )
    }
}