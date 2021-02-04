import React from 'react';
import { shallow } from 'enzyme';
import { CountryCard } from './CountryCard';
import { countries } from '../../__mocks__';

describe('<CountryCard>', () => {
  let props;

  beforeEach(() => {
    props = {
      country: countries[0],
      handleClick: jest.fn()
    };
  });

  it('Should match snapshot', () => {
    const wrapper = shallow(<CountryCard {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call handleClick', async () => {
    const wrapper = shallow(<CountryCard {...props} />);
    const card = wrapper.find('[data-testid="card"]');
    card.simulate('click');
    expect(props.handleClick).toHaveBeenLastCalledWith(props.country);
  });

  it('Should show country name', async () => {
    const wrapper = shallow(<CountryCard {...props} />);
    expect(wrapper.text()).toContain(props.country.name);
  });
});
