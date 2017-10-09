import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../containers/Home.js';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </BrowserRouter>
);

export default Router;
