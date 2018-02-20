
import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

/** ************************************************************************* */

test('[Button] renders', () => {
  const tree = renderer
    .create(<Button />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
