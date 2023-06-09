import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import NavbarComponent from '/components/navbar';

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
  align-items: flex-start; /* Cambiado a alineación izquierda */
  justify-content: center;
  background-color: ${grayPalette.light};
  width: 100%;
  height: 100vh;
  gap: 2em;
  box-shadow: 1px 4px 10px #0005;
  position: relative;
  padding: 1em;
`;

const Title = styled.h1`
  font-size: 1.8em; /* Tamaño de letra reducido */
  border-bottom: solid 1px #fff;
  color: ${bluePalette.dark};
  margin-bottom: 2em;
  width: 100%;
  text-align: left;
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
  background-color: ${grayPalette.medium};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Graficos = () => {
  return (
    <Section>
      <NavbarComponent />
      <Container>
        <Title>Graficos</Title>
      </Container>
    </Section>
  );
};

export default Graficos;
