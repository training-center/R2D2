import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'client/src/rootReducer';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const createLogger = require('redux-logger');
  const loggerMiddleware = createLogger({
    collapsed: true,
    diff: true
  });

  middlewares.push(loggerMiddleware);
}

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(...middlewares));
}
