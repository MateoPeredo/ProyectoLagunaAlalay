import React from 'react';

// Estilos personalizados usando styled-components
import { Section,Button,Container,Input,RegisterLink,Title } from '/components/style/estiloslogin';
   
const Register = () => {
  return (
  <Section>

<Container>
      <Title>Register</Title>
      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Register</Button>
      <RegisterLink to="/">volver</RegisterLink>
    </Container>
  </Section>
  );
};

export default Register;
