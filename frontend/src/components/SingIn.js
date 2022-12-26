import React, { useContext, useRef } from 'react';
import styled, { keyframes } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Context } from '../contexts/Contexts';

const SingIn = () => {
  const navigate = useNavigate()
  const user = useRef('')
  const userInput = useRef()
  const email = useRef('')
  const emailInput = useRef()
  const password = useRef('')
  const passwordInput = useRef()
  const passwordConfirm = useRef('')
  const passwordConfirmInput = useRef()
  const { url, token, errorT, succesT } = useContext(Context)



  const singin = async () => {
    if (user.current === '') {
      userInput.current.value = ''
      userInput.current.focus()
      errorT('Nombre de usuario invalido')
      return
    }
    if (!validEmail(email.current)) {
      emailInput.current.value = ''
      emailInput.current.focus()
      errorT('Correo invalido!')
      return
    }
    if (password.current !== passwordConfirm.current) {
      passwordConfirmInput.current.value = ''
      passwordConfirmInput.current.focus()
      errorT('Las contraseñas no coinciden')
      return
    }
    if (password.current === '') {
      passwordConfirmInput.current.value = ''
      passwordInput.current.focus()
      errorT('Contraseña invalida')
      return
    }
    const respuesta = await axios.post(url + 'usuario/registrarse', {
      nombre: user.current,
      correo: email.current,
      contraseña: password.current
    })
    if (respuesta.data.message === 'Ya existe un usuario asociado al nombre') {
      userInput.current.value = ''
      userInput.current.focus()
      errorT('Ya existe un usuario asociado al nombre')
      return
    }
    succesT('Registro realizado satisfactoriamente')
    setTimeout(() => {
      token.current = respuesta.data.token
      navigate('/home')
    }, 1200)


  }

  const validEmail = (email) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    } else { return false }
  }
  const onSubmit = (e) => {
    e.preventDefault()
    singin()
  }
  return (
    <Box>
      <Form onSubmit={onSubmit}>
        {/**<Link to='/'>X</Link>**/}
        <h2>Registrarse</h2>
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
            type="text"
            required="required"
            ref={emailInput}
            onChange={(e) => {
              email.current = e.target.value
            }}
            onKeyDown={(e) => { if (e.key === 'Enter') { onSubmit(e) } }}
          />
          <span>Correo</span>
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
        <InputBox>
          <input
            type="password"
            required="required"
            ref={passwordConfirmInput}
            onChange={(e) => {
              passwordConfirm.current = e.target.value
            }}
            onKeyDown={(e) => { if (e.key === 'Enter') { onSubmit(e) } }}
          />
          <span>Confirmar Contraseña</span>
          <i></i>
        </InputBox>
        <input type="submit" value="Registrarse" onClick={onSubmit} />
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
  height: 540px;
  background: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;

  &::before{
    content: "";
    position: absolute;
    top: -25%;
    left: -50%;
    width: 400px;
    height: 450px;
    background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
    transform-origin: bottom right;
    animation: ${animate} 6s linear infinite;
  }
  &::after {
    content: "";
    position: absolute;
    top: -25%;
    left: -50%;
    width: 400px;
    height: 450px;
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
  a{
    border: none;
    outline: none;
    text-align: end;
    margin-top:-2.25rem;
    margin-right:-1.75rem;
    margin-bottom:2.75rem;
    align-items:center;
    font-weight:500;
    font-size:2rem;
    cursor: pointer;
    text-decoration: none;
    color: #45f3ff;
  }
  input[type='submit']{
    border: none;
    outline: none;
    background: #45f3ff;
    padding: 11px 25px;
    width: 100%;
    margin-top: 20px;
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

export default SingIn;