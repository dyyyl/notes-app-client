import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';

import billUser from 'shared/api/billUser';

import Heading from 'shared/components/Heading';
import Layout from 'shared/components/Layout';

import BillingForm from './BillingForm';

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (storage, { token, error }) => {
    if (error) {
      console.error(error);
      return;
    }

    setLoading(true);

    try {
      await billUser({
        storage,
        source: token.id,
      });

      alert('Your card has been charged successfully!');
      setRedirect(true);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Heading>Settings</Heading>
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
        <Elements>
          <BillingForm loading={loading} handleSubmit={handleSubmit} />
        </Elements>
      </StripeProvider>
      {redirect && <Redirect to="/" />}
    </Layout>
  );
};

export default Settings;
