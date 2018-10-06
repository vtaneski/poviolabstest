import React, { Component } from 'react';

class Settings extends Component {

    render() {
        
        return (
            <div>
                <p>Select currency:</p>
                <select name="fiatCurrency">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CNY">CNY</option>
                </select>
            </div>
        );
    }
}

export default Settings;