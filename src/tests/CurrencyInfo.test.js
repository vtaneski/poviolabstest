import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyInfo from '../CurrencyInfo';
import CurrencyState from '../CurrencyState';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

const currencyState = new CurrencyState();
currencyState.fetchData();
currencyState.fetchCurrencyData(1);
const match = { params: { id: '1' } }

it('renders without crashing', () => {
    const div = document.createElement('div');
    setTimeout(() => {
        ReactDOM.render(<CurrencyInfo listState={currencyState} match={match} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('CurrencyInfo', () => {

    let currencyInfo;

    beforeEach(() => {
        setTimeout(() => {  // wait for the data to be downloaded
            currencyInfo = mount(<CurrencyInfo listState={currencyState} match={match} />);
        });
    });

    it('valid path should not redirect to 404', () => {
        setTimeout(() => {
            currencyInfo.update();
            expect(currencyInfo.find('table').length).toEqual(1);
            done();
        });

    });

    it('expects the selected item to be Bitcoin', () => {
        setTimeout(() => {  // wait for the data to be downloaded
            currencyInfo.update();
            const tr = currencyInfo.find('table.tbody.tr').at(1);   // 0 row are heads
            const td = tr.find('td').at(1);
            const name = td.text();
            expect(name).toEqual('Bitcoin');
            done();
        });
    });

    it('simulates refresh click', () => {
        setTimeout(() => {
            const buttonRefresh = currencyInfo.find('.refresh').children(0);
            buttonRefresh.simulate('click');
            done();
        });
    });
});