import React from 'react';
import logo from '../../assets/images/logo.png';

import {Container} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="-logo-gratitude" />
    </Container>
  );
};

export default Header;
