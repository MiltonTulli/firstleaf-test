import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { SearchInput } from './SearchInput';

describe('<SearchInput>', () => {
  let props;
  beforeEach(() => {
    props = {
      handleSearch: jest.fn(),
      filter: false
    };
  });
  it('Should match snapshot', () => {
    const wrapper = renderer.create(<SearchInput {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should trigger handleSearch', () => {
    const wrapper = shallow(<SearchInput {...props} />);
    const inputEl = wrapper.find('[data-testid="input"]');
    const submitEl = wrapper.find('[data-testid="search"]');

    const event = { target: { value: 'TEST' } };
    inputEl.simulate('change', event);
    submitEl.simulate('click', {});

    expect(props.handleSearch).toHaveBeenCalled();
  });
});
