import styled from 'styled-components';

const NavigationSection = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 25%;

  @media (max-width: 450px) {
    min-width: 40vw;
  }
`;

export default NavigationSection;
