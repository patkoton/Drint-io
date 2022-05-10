import styled from 'styled-components'

const Text = styled.p`
  font-size: ${props => props.size ||'16px'};
  text-align: ${props => props.align || 'left'};
  font-weight: ${props => props.weight || 'bold'};
  color: ${props => props.color || '#000000'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};

  @media only screen and (min-width: 768px) {
    font-size: ${props => props.Bigsize || '20px'};
    margin: ${props => props.Bigmargin || '0px'};
    padding: ${props => props.Bigpadding || '0px'};
  }
`;

export default Text;