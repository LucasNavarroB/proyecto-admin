import React, { useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Context } from '../contexts/Contexts';

const Login = () => {
  const { token, errorT, succesT, url } = useContext(Context)
  const user = useRef('')
  const userInput = useRef()
  const password = useRef('')
  const passwordInput = useRef()
  const navigate = useNavigate()

  const submit = async () => {
    if (user.current !== '' && password.current !== '') {
      const respuesta = await axios.post(url + 'usuario/iniciar-sesion', { nombre: user.current, contraseña: password.current })
      if (respuesta.data.message === 'Contraseña incorrecta') {
        passwordInput.current.value = ''
        passwordInput.current.focus()
        errorT('Contraseña incorrecta')
      }
      if (respuesta.data.message === 'Por favor realice su registro') {
        userInput.current.value = ''
        passwordInput.current.value = ''
        userInput.current.focus()
        errorT('Por favor realice su registro')
      }
      if (respuesta.data.token) {
        succesT('Inicio de sesion realizado satisfactoriamente')
        setTimeout(() => {
          //setToken(respuesta.data.token)
          token.current = respuesta.data.token
          navigate('/home')
        }, 750)
      }
    } else {
      errorT('Ingrese los datos para inicar sesion')
      userInput.current.value = ''
      passwordInput.current.value = ''
      userInput.current.focus()
    }
  }
  const onSubmit = (e) => {
    e.preventDefault()
    submit()
  }
  return (
    <Box>
      <Form onSubmit={onSubmit}>
        <h2>Iniciar Sesion</h2>
        <InputBox>
          <input
            type="text"
            required="required"
            ref={userInput}
            onChange={(e) => {
              user.current = e.target.value
            }}
            onKeyDown={(e) => { if (e.key === 'Enter') { onSubmit(e) } }}
          />
          <span>Usuario</span>
          <i></i>
        </InputBox>
        <InputBox>
          <input
            type="password"
            required="required"
            ref={passwordInput}
            onChange={(e) => {
              password.current = e.target.value
            }}
            onKeyDown={(e) => { if (e.key === 'Enter') { onSubmit(e) } }}
          />
          <span>Contraseña</span>
          <i></i>
        </InputBox>
        <input type="submit" value="Ingresar" onClick={onSubmit}></input>
      </Form>
    </Box>
  );
}

const animate = keyframes` 
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Box = styled.div`
  position: relative;
  width: 380px;
  height: 420px;
  background: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;

  &::before{
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right;
    animation: ${animate} 6s linear infinite;
  }
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right;
    animation: ${animate} 6s linear infinite;
    animation-delay: -3s;
  }
  
`

const Form = styled.div`
  position: absolute;
  inset: 2px;
  border-radius: 8px;
  background: #28292d;  
  z-index: 10;
  padding: 50px 40px;
  display: flex;
  flex-direction: column;

  h2{
    color: #45f3ff;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.1em;
  }

  input[type='submit']{
    border: none;
    outline: none;
    background: #45f3ff;
    padding: 11px 25px;
    width: 50%;
    margin-top: 10px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
  }

  input[type='submit']:active{
    opacity: 0.8;
  }
`

const InputBox = styled.div`
  position: relative;
  width: 300px;
  margin-top: 35px;
  
  input{
    position: relative;
    width: 100%;
    padding: 20px 10px 10px;
    background: transparent;
    border: none;
    outline: none;
    color:#23242a;
    font-size: 1em;
    letter-spacing: 0.05em;
    z-index: 10;
  }

  span{
    position: absolute;
    left: 0;
    padding: 20px 0px 10px;
    font-size: 1em;
    color: #8f8f8f;
    pointer-events: none;
    letter-spacing: 0.05em;
    transition: 0.5s;
  }

  input:valid ~ span,
  input:focus ~ span{
    color: #45f3ff;
    transform: translateX(0px) translateY(-34px);
    font-size: 0.75em;
  }

  i{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #45f3ff;
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
    z-index: 9;
  }

  input:valid ~ i,
  input:focus ~ i{
    height: 44px;
  }
`

export default Login;