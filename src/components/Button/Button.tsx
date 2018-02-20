
import * as React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

/** ************************************************************************* */

const onClick = e => console.log('CLICK!!', e.target);

const Button: React.SFC<Props> = ({ className }) => (
  <button className={className} onClick={onClick}>Click Me!</button>
);

/** ************************************************************************* */

export default styled(Button) `
  color: #f00;
  border: 1px solid #ff0000;
  height: 100px;
  width: 200px;
`;
