import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

import Landing from './Landing';
import NotFound from './NotFound';
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="https://kbogorodsky.github.io/react-burger-shop/" component={Landing} />
        <Route
          path="https://kbogorodsky.github.io/react-burger-shop/restaurant/:restaurantId"
          component={App}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
