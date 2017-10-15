import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components';

const req = require.context('../src/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

injectGlobal`
  html {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`


configure(loadStories, module);
