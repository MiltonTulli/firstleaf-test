import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from './Layout';

describe('<Layout>', () => {
  let props;

  beforeEach(() => {
    props = {
      handleSearch: jest.fn((country: string) => {
        return country;
      }),
      filter: false
    };
  });

  it('Should match snapshot', () => {
    const wrapper = shallow(<Layout {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render chilren', () => {
    const wrapper = shallow(
      <Layout {...props}>
        <h1 data-testid="child">test</h1>
      </Layout>
    );
    const node = wrapper.find('[data-testid="child"]');
    expect(node.exists()).toBeTruthy();
    expect(node.text()).toEqual('test');
  });
});
