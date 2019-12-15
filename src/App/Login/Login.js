import { Auth } from 'aws-amplify';
import React, { useState } from 'react';

import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import Heading from 'shared/components/Heading';
import Input from 'shared/components/Input';
import Label from 'shared/components/Label';

import LoginLayout from './LoginLayout';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      console.log('Logged in');
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <LoginLayout>
      <Heading>Login</Heading>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">
          Email
          <Input
            type="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Label>
        <Label htmlFor="password">
          Password
          <Input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Label>
        <Button type="submit">LOGIN</Button>
      </Form>
    </LoginLayout>
  );
};

export default Login;
