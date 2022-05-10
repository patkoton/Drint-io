import './App.css';
import { useState } from 'react';
import Line from './img/line.png';
//import About from './components/About'
import Container from './styles/Container'
import styled from 'styled-components';
import Statistics from './components/Statistics';

const LineImage = styled.img`
  position: absolute;
  height: 100%;
  left: 95%;
  z-index: 1;
  display: none;
  
  @media only screen and (min-width: 768px) {
    display: inline;
  }
`;

function App() {
  const [color, setColor] = useState('light');

  return (
    <Container theme={color}>
      <LineImage src={Line} />
      <Statistics background={color} themeswitch={setColor} />
    </Container>
  );
}

export default App;
