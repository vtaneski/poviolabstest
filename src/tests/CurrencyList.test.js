import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyList from '../CurrencyList';
import CurrencyState from '../CurrencyState';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

const currencyState = new CurrencyState();
currencyState.fetchData();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CurrencyList listState={currencyState} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('CurrencyList', () => {

    let currencyList;

    beforeEach(() => {
        //currencyState = jest.fn();
        currencyList = mount(<CurrencyList listState={currencyState} />);
      });

    it('requires state prop', () => {
        expect(currencyList.props().listState).toBeDefined();
    });

    it('renders table', () => {
        expect(currencyList.find('table').length).toEqual(1);
    });

    it('renders 100 rows in table', () => {
        setTimeout(() => {  // wait for the data to be downloaded
            currencyList.update();
            expect(currencyList.find('tr').length).toEqual(100);
            done();
        });  
    });

    it('renders nested components', () => {
        setTimeout(() => {  // wait for the data to be downloaded
            currencyList.update();
            expect(currencyList.children().length).toEqual(100);
            done();
        });        
    });

    it('simulates refresh click', () => {
        const buttonRefresh = currencyList.find('.refresh').children(0);
        buttonRefresh.simulate('click');
    });
});
