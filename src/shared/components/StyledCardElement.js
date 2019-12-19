import { CardElement } from 'react-stripe-elements';
import styled from 'styled-components';

const StyledCardElement = styled(CardElement)`
  margin: 2rem 0;
  padding: 1rem;
  border: 0;
  border-bottom: 1px solid var(--dark-grey);
  background-color: var(--light-grey);

  @media (max-width: 450px) {
    padding: 1rem;
  }
`;

export default StyledCardElement;
