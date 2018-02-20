
import * as React from 'react';
import { mount } from 'enzyme';

import App from './App';

/** ************************************************************************* */

test('[App] mounts', () => {
  const wrapper = mount(<App />);

  expect(wrapper).toMatchSnapshot();
});
