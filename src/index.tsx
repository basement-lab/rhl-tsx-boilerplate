import { AppContainer } from 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

declare const module: any;

const rootEl = document.getElementById('root');

const render = Component =>
  ReactDOM.render(
    <AppContainer>
        <Component />
    </AppContainer>,
    rootEl
  );

render(App);
if (module.hot) module.hot.accept('./App', () => render(App));

