import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from 'shared/styles/GlobalStyle';
import Navigation from 'shared/components/Navigation';
import NotFound from 'shared/components/NotFound';

import Home from './Home';
import Login from './Login';

const App = () => (
  <div style={{ minHeight: '100vh' }}>
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  </div>
);

export default App;
