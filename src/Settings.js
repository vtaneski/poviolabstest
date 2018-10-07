import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Settings extends Component {

    onChange = (event) => {
        const state = this.props.listState;
        state.fiatCurrency = event.target.value;
    }

    render() {
        const state = this.props.listState;  
        console.log("Rendered: " + state.fiatCurrency);
        return (
            <div>
                <p>Select currency:</p>
                <select name="fiatCurrency" onChange={this.onChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CNY">CNY</option>
                </select>
            </div>
        );
    }
}

export default Settings;