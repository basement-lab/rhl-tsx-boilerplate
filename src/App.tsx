
import * as React from 'react';
import { hot } from 'react-hot-loader';

import { Button } from './components';

/** ************************************************************************* */

class App extends React.Component<any, any> {
  componentDidMount() {
    console.log('App.componentDidMount()');
  }
  render() {
    return (<div>
      <h1>React Hot Loader v3 + Typescript</h1>
      <Button />
      <div>
        Test hot loading here
      </div>
    </div>);
  }
}

/** ************************************************************************* */

export default hot(module)(App);
