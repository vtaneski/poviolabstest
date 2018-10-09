import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyList from './CurrencyList';
import CurrencyItem from './CurrencyList';
import CurrencyState from './CurrencyState';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

const currencyState = new CurrencyState();
currencyState.fetchData();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrencyList listState={currencyState} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('CurrencyList', () => {
    it('renders table', () => {
        const currencyList = shallow(<CurrencyList listState={currencyState}/>);
        expect(currencyList.find('table').length).toEqual(1);
    });

    it('renders nested components', () => {
        const currencyList = mount(<CurrencyList listState={currencyState}/>);
        expect(currencyList.find('CurrencyItem').length).toEqual(100);
    });
});
