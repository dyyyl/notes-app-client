import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from 'shared/styles/GlobalStyle';
import Navigation from 'shared/components/Navigation';

import AddNote from './AddNote';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import SignUp from './SignUp';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      setAuthenticated(true);
    } catch (error) {
      if (error !== 'No current user') {
        console.error(error);
      }
    }
    setIsAuthenticating(false);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    !isAuthenticating && (
      <div style={{ minHeight: '100vh' }}>
        <BrowserRouter>
          <Navigation
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/login"
              render={() => <Login setAuthenticated={setAuthenticated} />}
            />
            <Route
              path="/signup"
              render={() => <SignUp setAuthenticated={setAuthenticated} />}
            />
            <Route path="/notes/new" render={() => <AddNote />} />
            <Route component={NotFound} />
          </Switch>
          <GlobalStyle />
        </BrowserRouter>
      </div>
    )
  );
};

export default App;
