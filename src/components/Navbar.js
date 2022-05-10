import styled from 'styled-components';
import { useState } from 'react';
import Flexbox from '../styles/Flexbox';
import Text from '../styles/Text';
import Input from '../styles/Input';
import Icon from '../styles/Icon';
import SwitchL from '../img/themelight.png';
import SwitchD from '../img/themedark.png';
import MenuL from '../img/menulight.png';
import MenuD from '../img/menudark.png';


const TextTheme = styled(Text)`
  color: ${props => props.theme === 'light' ? '#101010' : '#FFFFFF'};
`;

const IconFlex = styled(Flexbox)`
  width: 50px;
  height: fit-content;
  .icons {
    width: 15px;
    height: 14px;
  }
`;

const NavbarFlexbox = styled(Flexbox)`
  @media only screen and (min-width: 768px) {
    border-top: 1px solid rgba(0, 0, 0, 0.45);
    border-bottom: 1px solid rgba(0, 0, 0, 0.45);
  }
`;

function Navbar({ background, themeswitch }) {
  const [toggle, setToggle] = useState(SwitchL);
  const [menu, setMenu] = useState(MenuL);

  function ToggleSwitch() {
    if (background === "light") {
      themeswitch('dark');
      setToggle(SwitchD);
      setMenu(MenuD);
    }

    else if (background === 'dark') {
      themeswitch('light');
      setToggle(SwitchL);
      setMenu(MenuL);
    }
    
  }
  return(
    <NavbarFlexbox justify='space-around' align='center'>
      <TextTheme theme={background} as='h3' margin="10px 0px"> Drint.io </TextTheme>
      <Input theme={background} placeholder='Search for collectibles' margin="10px 0px" padding="3px 10px"  />
      <IconFlex align='center'>
        <Icon src={menu} alt='Menu Icon' padding='0px 5px' />
        <Icon src={toggle} alt='Toggle Switch' width='12px' height='17px' padding='0px 5px' onClick={ToggleSwitch} />
      </IconFlex>
    </NavbarFlexbox>
  );

}

export default Navbar;