import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme ? '#E5E5E5' :"1b1b1b"};
  backdrop-filter: blur(50px);
`;

export default Container;