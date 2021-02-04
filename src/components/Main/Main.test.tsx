import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Main, CountryCard } from '..';
import { countries } from '../../__mocks__';

describe('<Main>', () => {
  let props;
  beforeEach(() => {
    props = {
      loading: false,
      error: false,
      countries: countries,
      handleSearch: jest.fn()
    };
  });
  it('Should match snapshot', () => {
    const wrapper = renderer.create(<Main {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('Should render cards', () => {
    const wrapper = shallow(<Main {...props} />);
    const node = wrapper.find(CountryCard);
    expect(node.length).toEqual(props.countries.length);
  });
});
