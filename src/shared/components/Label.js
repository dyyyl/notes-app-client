import styled from 'styled-components';

const Label = styled.label`
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-size: 2.25rem;
  font-weight: 300;
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;

  ${props => (props.left ? 'align-self: flex-start;' : null)}
`;

export default Label;
