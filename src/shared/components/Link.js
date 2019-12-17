import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
  font-size: 2rem;
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: var(--dark-grey);
  margin: 2rem 0;
`;

export default Link;
