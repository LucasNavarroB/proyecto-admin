import { useContext } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Context } from "../contexts/Contexts";

const Home = () => {
  const { token } = useContext(Context)
  const location = useLocation()
  return (
    <>
      {
        token.current !== '' ?
          <>
            <NavBar>
            <div style={{height:'3rem',width:'3rem'}}></div>
            <Links>
              <NavLink
                style={location.pathname === "/home" ? { color: "#45f3ff" } : {}}
                to='/home'>
                Inicio
                {location.pathname === '/home' ? <i></i> : <span></span>}
              </NavLink>
              {/*<NavLink
                style={location.pathname === "/home/blog" ? { color: "#45f3ff" } : {}}
                to='/home/blog'>
                Blog
                {location.pathname === '/home/blog' ? <i></i> : <span></span>}
              </NavLink>*/}
              <NavLink
                style={location.pathname === "/home/about" ? { color: "#45f3ff" } : {}}
                to='/home/about'>
                Acerca de
                {location.pathname === '/home/about' ? <i></i> : <span></span>}
              </NavLink>
            </Links>
              <Logout to='/'><i></i><i></i><i></i></Logout>
            </NavBar>
            <Container>
              <Outlet />
              {/*<Content>
                [...Array(75)].map((x, i) =>
                  <p key={i}>Some text some text some text some text..</p>
                )
              </Content>*/}
            </Container>
          </>
          : <Navigate to='/' />
      }
    </>
  );
}

const Links = styled.div` 
  display:flex;
  padding:0 .25rem;
  justify-content:space-around;
`

const Logout = styled(Link)` 
  justify-self:end;
  display:grid;
  height:3rem ;
  width:3rem;
  align-items:center;
  justify-items:center;
  text-decoration: none;
  i{
    width:100%;
    height: .2rem;
    background: #45f3ff;
    border-radius:.15rem;
    transition: .5s;
  }
  &:hover :nth-child(1){
    width:75%;
    transform: translateY(.925rem) rotate(135deg); //45deg 135deg 225deg 315deg 405deg
  }
  &:hover :nth-child(2){
    width:0;
    height:0;
  }
  &:hover :nth-child(3){
    width:75%;
    transform: translateY(-.925rem) rotate(-135deg); //-45deg -135deg -225deg 315deg 405deg
  }
`

const NavLink = styled(Link)`
  margin: 10px 1.5rem;
  font-size: 2rem;
  color: #8f8f8f;
  text-decoration: none;
  display:grid;
  &:hover{
    color: #45f3ff;
  }
  i{
    position:relative;
    width: 100%;
    height: 2px;
    background: #45f3ff;
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
    justify-self:center;
  }
  &:hover i{
    width:50%;
  }
  &:hover span {
    justify-self:center;
    position:relative;
    width: 50%;
    height: 2px;
    background: #45f3ff;
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
  }
  span {
    width: 0%;
  }
`

const Container = styled.div` 
  position: fixed;
  overflow:scroll;
  width:100%;
  top:3.25rem;
  bottom:-1rem;
  max-height: 100%;
  padding:0.5rem;
  color:whitesmoke;
  display:grid;
  justify-content:center;
`

const NavBar = styled.nav` 
  display:inline-flex;
  align-items:center;
  justify-content:space-between;
  position:fixed;
  padding:.5rem;
  top:0;
  left:0;
  width: 100%;
  height: 3rem;
  border: .1rem solid;
  border-radius:.1rem;
  border-color:#45f3ff;
`

export default Home;