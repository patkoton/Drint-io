import Intro from './Intro';
import Container from '../styles/Container'
import styled from 'styled-components'

const IntroContainer = styled(Container)`
  padding-top: 20px;
  width: 100%;
  height: fit-content;
  background-color: ${props => props.theme === 'light' ? "#F7EDEA " : '#1B1B1B'};
`;

function Homepage({background, themeswitch}) {
  return (
    <IntroContainer theme={background}>
      <Intro background={background} themeswitch={themeswitch} />
    </IntroContainer>
  );
}

export default Homepage;