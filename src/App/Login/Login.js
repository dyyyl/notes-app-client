// NPM IMPORTS
import { Auth } from 'aws-amplify';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

// SHARED IMPORTS
import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import Heading from 'shared/components/Heading';
import Input from 'shared/components/Input';
import Label from 'shared/components/Label';
import Layout from 'shared/components/Layout';
import useFormFields from 'shared/hooks/useFormFields';

const Login = ({ authenticated, setAuthenticated }) => {
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (authenticated) setRedirect(true);
  }, [authenticated]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    try {
      await Auth.signIn(fields.email, fields.password);
      console.log('Logged in');
      setAuthenticated(true);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };
  return (
    <>
      {!authenticated && (
        <Layout>
          <Heading>Login</Heading>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="email">
              Email
              <Input
                type="email"
                id="email"
                onChange={handleFieldChange}
                required
              />
            </Label>
            <Label htmlFor="password">
              Password
              <Input
                type="password"
                id="password"
                onChange={handleFieldChange}
                required
              />
            </Label>
            <Button type="submit">{loading ? 'LOADING' : 'LOGIN'}</Button>
          </Form>
        </Layout>
      )}
      {redirect && <Redirect to="/" />}
    </>
  );
};

Login.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  setAuthenticated: PropTypes.func.isRequired,
};

export default Login;
