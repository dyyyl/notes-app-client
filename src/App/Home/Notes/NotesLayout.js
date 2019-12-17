import styled from 'styled-components';

const NotesLayout = styled.section`
  margin-top: 5vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50vw;

  @media (max-width: 600px) {
    width: 70vw;
  }

  @media (max-width: 410px) {
    width: 90vw;
    align-items: flex-start;
  }
`;

export default NotesLayout;
