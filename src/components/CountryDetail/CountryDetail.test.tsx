import React from 'react';
import { shallow } from 'enzyme';
import { countries } from '../../__mocks__';
import { CountryDetail } from './CountryDetail';

describe('<CountryDetail>', () => {
  let props;
  beforeEach(() => {
    props = {
      history: {},
      location: {
        state: {
          country: countries[0]
        }
      },
      match: {}
    };
  });
  it('Should match snapshot', () => {
    const wrapper = shallow(<CountryDetail {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('Should show country name', () => {
    const wrapper = shallow(<CountryDetail {...props} />);
    const node = wrapper.find('[data-testid="name"]');
    expect(node.text()).toEqual(props.location.state.country.name);
  });
  it('Should show country capital', () => {
    const wrapper = shallow(<CountryDetail {...props} />);
    const node = wrapper.find('[data-testid="capital"]');
    expect(node.text()).toEqual(props.location.state.country.capital);
  });
});
