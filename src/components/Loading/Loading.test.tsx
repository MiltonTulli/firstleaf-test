import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Loading } from './Loading';

describe('<Loading>', () => {
  it('Should match snapshot', () => {
    const render = renderer
      .create(
        <Loading isLoading={true}>
          <h1 id="test">test</h1>
        </Loading>
      )
      .toJSON();
    expect(render).toMatchSnapshot();
  });

  it('Should not return child element if isLoading=true', async () => {
    const wrapper = shallow(
      <Loading isLoading={true}>
        <h1 id="test">test</h1>
      </Loading>
    );
    expect(wrapper.find('#test').length).toEqual(0);
  });

  it('Should return child element if isLoading=false', async () => {
    const wrapper = shallow(
      <Loading isLoading={false}>
        <h1 id="test">test</h1>
      </Loading>
    );
    expect(wrapper.find('#test').length).toEqual(1);
  });
});
