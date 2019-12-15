import styled from 'styled-components';

const Input = styled.input`
  margin: 1rem 0;
  height: 5rem;
  font-size: 2rem;
  font-weight: 200;
  letter-spacing: 0.1rem;
  max-width: 50rem;
  min-width: 25rem;
  padding: 1rem;
  border: 0;
  border-bottom: 1px solid var(--dark-grey);
  background-color: var(--light-grey);

  &:focus {
    outline: none;
    border: 1px solid var(--dark-grey);
  }

  &:invalid {
    box-shadow: none;
  }
`;

export default Input;
