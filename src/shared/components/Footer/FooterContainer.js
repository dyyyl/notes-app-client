import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100vw;
  height: 4vh;
  background-color: var(--dark-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  @media (max-height: 500px) {
    height: 6vh;
  }
`;

export default FooterContainer;
