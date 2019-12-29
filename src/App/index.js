import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from 'shared/components/AuthenticatedRoute';
import Footer from 'shared/components/Footer';
import Navigation from 'shared/components/Navigation';
import UnauthenticatedRoute from 'shared/components/UnauthenticatedRoute';

import GlobalStyle from 'shared/styles/GlobalStyle';

import AddNote from './AddNote';
import Home from './Home';
import Login from './Login';
import Note from './Note';
import NotFound from './NotFound';
import ResetPassword from './ResetPassword';
import Settings from './Settings';
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
        alert(error);
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
            <Route exact path="/">
              <Home authenticated={authenticated} />
            </Route>

            <UnauthenticatedRoute
              path="/login/reset"
              authenticated={authenticated}
              component={ResetPassword}
              setAuthenticated={setAuthenticated}
            />
            <UnauthenticatedRoute
              path="/login"
              authenticated={authenticated}
              component={Login}
              setAuthenticated={setAuthenticated}
            />
            <UnauthenticatedRoute
              path="/signup"
              authenticated={authenticated}
              component={SignUp}
              setAuthenticated={setAuthenticated}
            />

            <AuthenticatedRoute
              path="/settings"
              authenticated={authenticated}
              component={Settings}
            />
            <AuthenticatedRoute
              path="/notes/new"
              authenticated={authenticated}
              component={AddNote}
            />
            <AuthenticatedRoute
              path="/notes/:userId"
              authenticated={authenticated}
              component={Note}
            />

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
