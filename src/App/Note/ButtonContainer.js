import styled from 'styled-components';

const ButtonContainer = styled.section`
  display: flex;
  justify-content: space-around;
  width: 70vw;

  @media (max-width: 730px) {
    flex-direction: column;

    button {
      margin-bottom: 1rem;
    }
  }
`;

export default ButtonContainer;
