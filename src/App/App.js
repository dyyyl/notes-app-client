import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from 'shared/components/Footer';
import Navigation from 'shared/components/Navigation';

import GlobalStyle from 'shared/styles/GlobalStyle';

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
      <div style={{ minHeight: '100vh', display: 'grid' }}>
        <BrowserRouter>
          <Navigation
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home authenticated={authenticated} />}
            />

            <Route
              path="/login"
              render={() => (
                <Login
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
              )}
            />
            <Route
              path="/signup"
              render={() => (
                <SignUp
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
              )}
            />

            <Route path="/notes/new" render={() => <AddNote />} />
            <Route component={NotFound} />
          </Switch>
          <GlobalStyle />
        </BrowserRouter>
        <Footer />
      </div>
    )
  );
};

export default App;
