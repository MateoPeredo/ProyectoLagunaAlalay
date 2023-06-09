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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${grayPalette.light};
  width: 40em;
  height: 40em;
  gap: 2em;
  box-shadow: 1px 4px 10px #0005;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 13em;
    height: 13em;
    z-index: 0;
    bottom: 0em;
    left: 0;
    border-radius: 0 5em 0 0;
    background: linear-gradient(145deg, ${bluePalette.light}, ${bluePalette.medium});
  }

  &::before {
    content: '';
    position: absolute;
    width: 13em;
    height: 13em;
    z-index: 0;
    bottom: 1em;
    left: 1em;
    border-radius: 0 5em 0 0;
    background: linear-gradient(145deg, ${bluePalette.dark}, ${bluePalette.medium});
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  border-bottom: solid 1px #fff;
  color: ${bluePalette.dark};
  margin-bottom: 2em;
  width: 30%;
  text-align: left; /* Cambiado a alineación izquierda */
  padding: 0.5em;
  text-transform: uppercase;
`;

const Input = styled.input`
  padding: 8px;
  width: 50%;
  border: none;
  border-bottom: solid 1px #fff;
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: transparent;
  outline: none;
`;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${grayPalette.medium}; /* Cambiado a tono de gris */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  padding: 8px 5em;
  background-color: ${bluePalette.medium};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RegisterLink = styled(Link)`
  padding: 8px 3.8em;
  background-color: ${bluePalette.dark};
  color: #fff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 8px;
`;

const Login = () => {
  

  return (
    <Section>
      <Container>
        <Title>Login</Title>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button to="/graficos" >
          Login
        </Button>
        <RegisterLink to="/register" >
          Register
        </RegisterLink>
      </Container>
    </Section>
  );
};

export default Login;
