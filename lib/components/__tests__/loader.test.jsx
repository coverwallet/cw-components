import React from 'react';
import { shallow, mount } from 'enzyme';

import { Loader } from '../../index';


describe('Loader', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Loader />).contains(<span className="loader__inner" />)).toBe(true);
  });

  it('should be selectable by class "loader"', () => {
    expect(shallow(<Loader />).is('.loader')).toBe(true);
  });

  it('should be selectable by class "loader-container"', () => {
    expect(shallow(<Loader global />).is('.loader-container')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Loader />).find('.loader').length).toBe(1);
  });
});
