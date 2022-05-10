import styled from 'styled-components'

const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justify || 'normal'};
  align-items: ${props => props.align || 'normal'};
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
`;

export default Flexbox;