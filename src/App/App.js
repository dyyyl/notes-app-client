import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from 'shared/styles/GlobalStyle';
import Navigation from 'shared/components/Navigation';
import NotFound from 'shared/components/NotFound';

import Home from './Home';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
