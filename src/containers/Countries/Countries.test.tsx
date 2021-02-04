import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Countries } from './Countries';
import { countries } from '../../__mocks__';
import { withRouter } from '../../utils/test';

describe('<Countries>', () => {
  let props;
  beforeEach(() => {
    props = {
      loading: false,
      error: false,
      countries: countries,
      countriesHasFilter: false,
      getAllCountries: jest.fn(),
      getCountriesByName: jest.fn()
    };
  });
  it('Should match snapshot', () => {
    const wrapper = renderer.create(withRouter(<Countries {...props} />)).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call getAllCountries on mount', () => {
    props.countries = [];
    shallow(<Countries {...props} />);
    expect(props.getAllCountries).toHaveBeenCalled();
  });
});
