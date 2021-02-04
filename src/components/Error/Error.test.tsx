import React from 'react';
import { shallow } from 'enzyme';
import { Error } from './Error';

describe('<Error>', () => {
  let props;
  beforeEach(() => {
    props = {
      render: jest.fn(() => <h1 data-testid="render">hello</h1>),
      message: 'MESSAGE',
      hasError: true,
      title: 'ERROR_TITLE'
    };
  });
  it('Should match snapshot', () => {
    const wrapper = shallow(<Error {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should show default title', () => {
    delete props.title;
    const wrapper = shallow(<Error {...props} />);
    const node = wrapper.find('[data-testid="title"]');
    expect(node.text()).toEqual('Error');
  });

  it('Should show custom title', () => {
    const wrapper = shallow(<Error {...props} />);
    const node = wrapper.find('[data-testid="title"]');
    expect(node.text()).toEqual(props.title);
  });

  it('Should show message', () => {
    const wrapper = shallow(<Error {...props} />);
    const node = wrapper.find('[data-testid="message"]');
    expect(node.text()).toEqual(props.message);
  });

  it('Should render prop', () => {
    const wrapper = shallow(<Error {...props} />);
    const node = wrapper.find('[data-testid="render"]');
    expect(props.render).toHaveBeenCalled();
    expect(node).toBeTruthy();
  });

  it('Should not render prop', () => {
    props.render = null;
    const wrapper = shallow(<Error {...props} />);
    const node = wrapper.find('[data-testid="render"]');
    expect(node.exists()).toBeFalsy();
  });

  it('Should not render children if has error', () => {
    props.hasError = true;
    const wrapper = shallow(
      <Error {...props}>
        <div data-testid="child">child</div>
      </Error>
    );
    const node = wrapper.find('[data-testid="child"]');
    expect(node.exists()).toBeFalsy();
  });

  it('Should render children if does not has error', () => {
    props.hasError = false;
    const wrapper = shallow(
      <Error {...props}>
        <div data-testid="child">child</div>
      </Error>
    );
    const node = wrapper.find('[data-testid="child"]');
    expect(node.exists()).toBeTruthy();
  });
});
