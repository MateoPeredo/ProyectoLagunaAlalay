import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

// Paleta de tonos grises
const grayPalette = {
  light: '#f2f2f2',
  medium: '#c4c4c4',
  dark: '#888888'
};

// Paleta de tonos azules
const bluePalette = {
  light: '#a9c3d4',
  medium: '#6c8ca9',
  dark: '#335b75'
};

const Navbar = styled.nav`
height: 5%;
width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${bluePalette.medium};
  padding: 1em;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLink = styled.li`
  margin-right: 1em;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${bluePalette.light};
  font-weight: bold;
  padding: 0.5em;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled(Link)`
  background-color: transparent;
  border: none;
  color: ${bluePalette.light};
  font-weight: bold;
  cursor: pointer;
`;
const Div=styled.div`
  height: 80%;
  width: 100%;
`;

const NavbarComponent = () => {
  return (
    <Container>
      <Navbar>
        <NavLinks>
          <NavLink>
            <StyledLink to="/graficos">Graficos</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink to="/datos">Datos</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink to="/informe">Informe</StyledLink>
          </NavLink>
          <NavLink>
            <StyledLink to="/mapa">Mapa</StyledLink>
          </NavLink>
        </NavLinks>
        <LogoutButton to="/">Logout</LogoutButton>
      </Navbar>
      <Div>
        <Outlet />
      </Div>
    </Container>
  );
};

export default NavbarComponent;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;