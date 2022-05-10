import styled from 'styled-components';

const Icon = styled.img`
  width: ${props => props.width || '15px'};
  height: ${props => props.height || "15px"};
  padding: ${props => props.padding || '0px'};
  margin: ${props => props.margin || '0px'};
`;

export default Icon;