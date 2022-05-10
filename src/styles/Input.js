import styled from 'styled-components';

const Input = styled.input`
  width: ${props => props.width || '120px'};
  height: ${props => props.height ||'20px'};
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding ||'10px'};
  font-size: ${props => props.size || '10px'};
  font-weight: ${props => props.weight || 'light'};
  border-radius: ${props => props.radius || '5px'};
  color: ${props => props.theme === 'light' ? '#101010' : '#FFFFFF'};
  border: 1px solid ${props => props.theme === 'light' ? 'rgba(172, 12, 0, 0.62)' : 'rgba(198, 13, 0, 0.62)'};
  background-color: ${props => props.theme === 'light' ? "#FFFFFF" : '#0D0D0D'};

  :focus {
    outline: none !important;   
  }
`;

export default Input;