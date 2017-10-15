import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'src/pages/Home';

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </BrowserRouter>
);

export default Router;
