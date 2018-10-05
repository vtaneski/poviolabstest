import React, { Component } from 'react';
import './CurrencyList.css';

class CurrencyList extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    fetchData() {
        // sorted by rank
        // format - array
        fetch('https://api.coinmarketcap.com/v2/ticker/?sort=rank&structure=array')
            .then(results => results.json())
            .then(newData => this.setState({ data: newData.data }));
    }

    componentDidMount() {
        this.fetchData();
    }

    onRefresh = () => {
        this.fetchData();
    }

    onClick() {
        alert("Clicked: ");
    }

    render() {
        return (
            <div>
                <button onClick={this.onRefresh}>Refresh</button>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Rank</td>
                            <td>Symbol</td>
                            <td>Price</td>
                            <td>24h change</td>
                            <td></td>
                        </tr>
                        {this.state.data.map(item => {

                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.rank}</td>
                                    <td>{item.symbol}</td>
                                    <td></td>
                                    <td></td>
                                    <td><button onClick={this.onClick}>Details</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CurrencyList;