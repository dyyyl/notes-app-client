import PropTypes from 'prop-types';
import React from 'react';

import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import Input from 'shared/components/Input';
import Label from 'shared/components/Label';

// eslint-disable-next-line
const SignUpConfirmation = ({
  fields,
  handleFieldChange,
  loading,
  setLoading,
}) => {
  const validateForm = () => fields.confirmationCode.length > 0;

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="confirmationCode">
        Confirmation Code
        <Input
          type="tel"
          id="confirmationCode"
          onChange={handleFieldChange}
          required
        />
      </Label>
      <Button type="submit" disabled={!validateForm()}>
        {loading ? 'LOADING' : 'VERIFY'}
      </Button>
    </Form>
  );
};

SignUpConfirmation.propTypes = {
  fields: PropTypes.object.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default SignUpConfirmation;
