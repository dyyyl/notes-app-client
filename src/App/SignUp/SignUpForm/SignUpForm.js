import PropTypes from 'prop-types';
import React from 'react';

import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import Input from 'shared/components/Input';
import Label from 'shared/components/Label';

// eslint-disable-next-line
const SignUpForm = ({
  fields,
  handleFieldChange,
  loading,
  setLoading,
  setNewUser,
}) => {
  const validateForm = () => fields.password === fields.confirmPassword && fields.password !== '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    setNewUser('test');

    setLoading(false);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">
        Email
        <Input type="email" id="email" onChange={handleFieldChange} required />
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
      <Label htmlFor="confirmPassword">
        Confirm Password
        <Input
          type="password"
          id="confirmPassword"
          onChange={handleFieldChange}
          required
        />
      </Label>
      <Button type="submit" disabled={!validateForm()}>
        {loading ? 'LOADING' : 'SIGN UP'}
      </Button>
    </Form>
  );
};

SignUpForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  setNewUser: PropTypes.func.isRequired,
};

export default SignUpForm;
