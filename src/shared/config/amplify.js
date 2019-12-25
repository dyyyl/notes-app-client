const dev = {
  STRIPE_KEY: process.env.REACT_APP_STRIPE_API_KEY,
  s3: {
    MAX_ATTACHMENT_SIZE: process.env.REACT_APP_MAX_ATTACHMENT_SIZE,
    REGION: process.env.REACT_APP_DEV_REGION,
    BUCKET: process.env.REACT_APP_DEV_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_DEV_REGION,
    URL: process.env.REACT_APP_DEV_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_DEV_REGION,
    USER_POOL_ID: process.env.REACT_APP_DEV_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_DEV_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_DEV_IDENTITY_POOL_ID,
  },
};

const prod = {
  STRIPE_KEY: process.env.REACT_APP_STRIPE_API_KEY,
  s3: {
    MAX_ATTACHMENT_SIZE: process.env.REACT_APP_MAX_ATTACHMENT_SIZE,
    REGION: process.env.REACT_APP_PROD_REGION,
    BUCKET: process.env.REACT_APP_PROD_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_PROD_REGION,
    URL: process.env.REACT_APP_PROD_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_PROD_REGION,
    USER_POOL_ID: process.env.REACT_APP_PROD_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_PROD_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_PROD_IDENTITY_POOL_ID,
  },
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  ...config,
};
