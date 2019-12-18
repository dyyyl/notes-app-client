import styled from 'styled-components';

const Layout = styled.main`
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 400px) {
    margin: 15vh 0;
  }
`;

export default Layout;
