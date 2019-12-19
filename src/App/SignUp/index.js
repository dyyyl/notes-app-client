import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Heading from 'shared/components/Heading';
import Layout from 'shared/components/Layout';
import useFormFields from 'shared/hooks/useFormFields';

import SignUpConfirmation from './SignUpConfirmation';
import SignUpForm from './SignUpForm';

const SignUp = ({ setAuthenticated }) => {
  const { fields, handleFieldChange } = useFormFields({
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: '',
  });
  const [newUser, setNewUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <Layout>
      <Heading>Sign up</Heading>
      {newUser === null ? (
        <SignUpForm
          fields={fields}
          handleFieldChange={handleFieldChange}
          loading={loading}
          setLoading={setLoading}
          setNewUser={setNewUser}
        />
      ) : (
        <SignUpConfirmation
          fields={fields}
          handleFieldChange={handleFieldChange}
          loading={loading}
          setAuthenticated={setAuthenticated}
          setLoading={setLoading}
        />
      )}
    </Layout>
  );
};

SignUp.propTypes = {
  setAuthenticated: PropTypes.func.isRequired,
};

export default SignUp;
