import React from 'react';
import renderer from 'react-test-renderer';
import { NotFound } from './NotFound';

describe('<NotFound>', () => {
  it('Should match snapshot', () => {
    const wrapper = renderer.create(<NotFound />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
