import { observable } from 'mobx';

class CurrencyState {
    @observable list = [];
    @observable selectedCurrency = {};
    @observable fiatCurrency = "USD";
    newFiatCurrencySet = false;

    getSelectedItem = (id) => {
        return this.list.filter(
            item => item.id === id
        );
    }

    fetchData() {
        // sorted by rank
        // format - array
        // fiat currency
        console.log("Retrieving data");
        fetch('https://api.coinmarketcap.com/v2/ticker/?sort=rank&structure=array&convert=' + this.fiatCurrency)
            .then(results => results.json())
            .then(newData => this.list = newData.data);
    }

    fetchCurrencyData(id) {
        // retreiving data for selected currency
        console.log("Retrieving data for selected currency with id: " + id);
        fetch('https://api.coinmarketcap.com/v2/ticker/' + id + '/?convert=' + this.fiatCurrency)
            .then(results => results.json())
            .then(selectedItem => {
                console.log("Updating state");
                this.selectedCurrency = selectedItem.data;
                console.log("Done fetching!");
            });        
    }
}

export default CurrencyState;
