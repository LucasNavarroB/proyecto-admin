import React from 'react'
import styled from 'styled-components';
import CardHover from './CardHover';
const Inicio = () => {
  return (
    <>
      <Title> Bienvenido</Title>
      <CardHover />
    </>
  );
}

const Title = styled.h1` 
  margin: .5rem 0 1rem 0;
  height: fit-content;
  width:fit-content;
  justify-self:center;

`

export default Inicio;