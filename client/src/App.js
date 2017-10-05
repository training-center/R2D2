import React from 'react';
import { Provider } from 'react-redux';
import Router from 'client/src/features/Router';
import configureStore from 'client/src/store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
