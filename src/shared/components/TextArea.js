import styled from 'styled-components';

const TextArea = styled.textarea`
  font-family: Inter, Arial, Helvetica, sans-serif;
  margin: 1rem 0;
  height: 40rem;
  font-size: 1.75rem;
  font-weight: 200;
  letter-spacing: 0.1rem;
  min-width: 70vw;
  padding: 2rem;
  border: 0;
  border: 1px solid var(--dark-grey);
  background-color: var(--light-grey);
  resize: none;

  &:focus {
    outline: none;
    border: 1px solid var(--dark-grey);
  }

  &:invalid {
    box-shadow: none;
  }

  @media (max-width: 340px) {
    width: 50vw;
  }
`;

export default TextArea;
