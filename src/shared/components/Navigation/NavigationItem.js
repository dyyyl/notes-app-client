import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationItem = styled(Link)`
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: var(--large);
  color: var(--dark-grey);
  text-decoration: none !important;
  line-height: 1.2;
  letter-spacing: -0.04em;

  background-image: linear-gradient(
    transparent calc(100% - 3px),
    var(--dark-grey) 3px
  );
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.8s;

  &:hover {
    background-size: 100% 100%;
  }

  @media (max-width: 450px) {
    font-size: 2rem;
  }
`;

export default NavigationItem;
