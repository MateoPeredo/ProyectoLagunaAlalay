import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


import NavbarComponent from '/components/navbar';

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { name: "dht11", age: 25, weight: 22 },
  { name: 'turbidez', age: 25, weight: 70 },
  { name: 'Susana', age: 15, weight: 65 },
  { name: 'Pedro', age: 35, weight: 85 },
  { name: 'Felipe', age: 12, weight: 48 },
  { name: 'Laura', age: 30, weight: 69 },
  { name: 'Adrián', age: 15, weight: 78 },
]

const Graficos = () => {
  const [datos, setDatos] = useState([]);
  const mostrar = () => {

    const options = {
      method: 'GET',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
    };

    fetch('http://127.0.0.1:8000/api/mostrar', options)
      .then(response => response.json())
      .then(data => {
        setDatos(data);
      })
      .catch(err => console.error(err));
  }
  useEffect(() => {
    mostrar();
  }, []);

  return (
    <Section>
      
      <Container>
        <Title>Graficos</Title>
        {datos.map((v, i) => (
          <div key={i}>
            <p>La temperatura es :{v.temperatura}</p>
            <p>La humedad es : {v.humedad}</p>
          </div>
        ))
        }

        <ResponsiveContainer width="100%" aspect={2}>
          <BarChart
            data={datos}
            width={500}
            height={300}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="4 1 2" />
            <XAxis dataKey="temperatura" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="temperatura" fill="#6b48ff" />
            <Bar dataKey="humedad" fill="#1ee3cf" />
          </BarChart>
        </ResponsiveContainer>

      </Container>
    </Section>
  );
};

export default Graficos;

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
 
  width: 50%;
  height: 100vh;
  gap: 2em;

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

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
`;
