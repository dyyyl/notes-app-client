import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { injectStripe } from 'react-stripe-elements';

import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import Input from 'shared/components/Input';
import Label from 'shared/components/Label';
import StyledCardElement from 'shared/components/StyledCardElement';

import useFormFields from 'shared/hooks/useFormFields';

const BillingForm = ({ loading, handleSubmit, ...props }) => {
  const { fields, handleFieldChange } = useFormFields({
    name: '',
    storage: '',
  });
  const [processing, setProcessing] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);

  const validateForm = () =>
    fields.name !== '' && fields.storage !== '' && isCardComplete; // eslint-disable-line

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setProcessing(true);

    const { token, error } = await props.stripe.createToken({
      name: fields.name,
    });

    setProcessing(false);

    handleSubmit(fields.storage, { token, error });
  };

  return (
    <Form onSubmit={handleFormSubmit} style={{ minWidth: '35vw' }}>
      <Label htmlFor="storage" style={{ width: '100%' }}>
        Storage
        <Input
          min="0"
          type="number"
          id="storage"
          value={fields.storage}
          onChange={handleFieldChange}
          placeholder="# of notes to store"
          style={{ width: '100%' }}
        />
      </Label>

      <Label htmlFor="name" style={{ width: '100%' }}>
        Cardholder&apos;s name
        <Input
          type="text"
          id="name"
          value={fields.name}
          onChange={handleFieldChange}
          placeholder="Neville Longbottom"
          style={{ width: '100%' }}
        />
      </Label>

      <Label htmlFor="card" style={{ width: '100%' }}>
        Credit Card Info
        <br />
        <small style={{ fontSize: '1rem' }}>
          Test using this credit card: 4242 4242 4242 4242
        </small>
        <StyledCardElement
          id="card"
          onChange={(event) => setIsCardComplete(event.complete)}
          style={{
            base: {
              fontSize: '16px',
              fontFamily: 'Inter, Arial, Helvetica, sans-serif ',
              fontWeight: 300,
            },
          }}
        />
      </Label>
      <Button disabled={!validateForm()}>
        {loading || processing ? 'LOADING' : 'PURCHASE'}
      </Button>
    </Form>
  );
};

BillingForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  stripe: PropTypes.object.isRequired,
};

export default injectStripe(BillingForm);
