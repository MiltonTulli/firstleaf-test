import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from './App';
import getStore from './getStore';

describe('<App>', () => {
  let store;

  beforeEach(() => {
    store = getStore();
  });

  it('Should match snapshot', () => {
    const rendered = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
