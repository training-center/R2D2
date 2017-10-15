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
  html {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }
`;

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
