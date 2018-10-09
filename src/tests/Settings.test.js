import React from 'react';
import ReactDOM from 'react-dom';
import Settings from '../Settings';
import CurrencyState from '../CurrencyState';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

const currencyState = new CurrencyState();
currencyState.fetchData();

it('renders without crashing', () => {
    const div = document.createElement('div');
    setTimeout(() => {
        ReactDOM.render(<Settings listState={currencyState} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('Settings', () => {

    let settings;

    beforeEach(() => {
        settings = mount(<Settings listState={currencyState} />);
    });

    it('simulates fiat currency changing', () => {
        const beforeChangeCurrency = currencyState.fiatCurrency;
        expect(beforeChangeCurrency).toEqual("USD");
        const selection = settings.find('#fiatCurrency');
        selection.simulate('change',{target: {value:"EUR"}});
        const afterChangeCurrency = currencyState.fiatCurrency;
        expect(afterChangeCurrency).toEqual("EUR");
    });
});