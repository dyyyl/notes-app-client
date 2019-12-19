import React from 'react';

import FooterContainer from './FooterContainer';
import FooterText from './FooterText';

const Footer = () => (
  <FooterContainer>
    <FooterText>
      Hello Notes was made with{' '}
      <span role="img" aria-label="love">
        ❤️
      </span>{' '}
      and{' '}
      <span role="img" aria-label="coffee">
        ☕
      </span>{' '}
      in Berlin
    </FooterText>
  </FooterContainer>
);

export default Footer;
