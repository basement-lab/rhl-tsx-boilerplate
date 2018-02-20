
import * as React from 'react';
import styled from 'styled-components';

/** ************************************************************************* */

const onClick = e => console.log('CLICK!!', e.target);

const Button = () => (
  <button onClick={onClick}>Click Me!</button>
);

/** ************************************************************************* */

export default styled(Button)`
  color: #f00;
  color: #ff0000;
  height: 100px;
  width: 200px;
`;
