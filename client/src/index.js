import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

injectGlobal`
  body {
    margin: 0;
  }
`;

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
