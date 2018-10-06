import { observable } from 'mobx';

class CurrencyState {
    @observable list = [];
    @observable selectedCurrency = {};

    fetchData() {
        // sorted by rank
        // format - array
        console.log("Fetching data");
        fetch('https://api.coinmarketcap.com/v2/ticker/?sort=rank&structure=array')
            .then(results => results.json())
            .then(newData => this.list = newData.data); //BOLJŠI NAČIN????
        //.then(newData => this.list = Object.assign({}, newData.data));
    }

    fetchCurrencyData(id) {
        console.log("Fetching curency data");
        // retreiving data for selected currency
        fetch('https://api.coinmarketcap.com/v2/ticker/' + id + '/')
            .then(results => results.json())
            .then(selectedItem => {
                this.selectedCurrency = Object.assign({}, selectedItem.data);
                console.log(selectedItem.data);
                console.log(this.selectedCurrency.id);


                // POPRAVI ALI PRESTAVI USTREZNO
                alert(
                    "Rank: " + this.selectedCurrency.rank + "\n" +
                    "Name: " + this.selectedCurrency.name + "\n" +
                    "Symbol: " + this.selectedCurrency.symbol + "\n" +
                    "Price: " + this.selectedCurrency.quotes.USD.price + "\n" +
                    "1h change: " + this.selectedCurrency.quotes.USD.percent_change_1h + "\n" +
                    "24h change: " + this.selectedCurrency.quotes.USD.percent_change_24h + "\n" +
                    "7d change: " + this.selectedCurrency.quotes.USD.percent_change_7d + "\n" +
                    "Total supply: " + this.selectedCurrency.total_supply + "\n" +
                    "Available supply: " + this.selectedCurrency.circulating_supply + "\n"
                );
            });        
    }
}

export default CurrencyState;
