import React from 'react';
import { Provider } from 'react-redux';
import Router from 'src/features/Router';
import configureStore from 'src/store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
