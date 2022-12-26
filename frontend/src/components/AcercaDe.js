import React from 'react'
import styled from 'styled-components';
const AcercaDe = () => {
  return (
    <Container>
      <Title>Acerca De Nosotros</Title>
      <div style={{display:'grid',justifyItems:'center',alignItems:'center',padding:'2.5rem',height:'fit-content'}}>
        <List>
      <h1>Integrantes: </h1>
          <li>Lucas Navarro - Rol 201930044-K</li>
          <li>Cristian Perez - Rol 201930025-3</li>
        </List>
      </div>
    </Container>
  );
}

const Container = styled.div` 
  width:100%;
  height:100%;
  display: grid;
  justify-items:center;
  align-content:start;
`

const Title = styled.h1` 
  margin: .5rem 0 1rem 0;
  height: fit-content;
  width:fit-content;
`
const List = styled.ul`
  display: grid;
  justify-items:center;
  vertical-align:top;
  gap:.5rem;
  li{
    font-size:1.5rem;
  }
`

export default AcercaDe;