import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyList from './CurrencyList';
import CurrencyState from './CurrencyState';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() })

const currencyState = new CurrencyState();
    currencyState.fetchData();

it('renders without crashing', () => {
    

    const div = document.createElement('div');
    ReactDOM.render(<CurrencyList listState={currencyState} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Currency table', () => {
    
    it('CurrencyList renders table', () => {
        const currencyList = shallow(<CurrencyList listState={currencyState} />);
        expect(currencyList.find('table').length).toEqual(1);
    });
});
