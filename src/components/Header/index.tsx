import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container, ActiveBar } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const activeRoute = useLocation();

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/">
            Listagem
            {activeRoute.pathname === '/' && <ActiveBar />}
          </Link>
          <Link to="/import">
            Importar
            {activeRoute.pathname === '/import' && <ActiveBar />}
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
