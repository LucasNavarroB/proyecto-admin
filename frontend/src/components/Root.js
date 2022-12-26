import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const Root = () => {
  const location = useLocation();
  return (
    <Container>
      <NavBar>
        <Links
          style={location.pathname === "/" ? { color: "#45f3ff" } : {}}
          to="/"
        >
          Inicar sesion
          {location.pathname === "/" ? <i></i> : <span></span>}
        </Links>
        <Links
          location={location.pathname}
          style={location.pathname === "/singin" ? { color: "#45f3ff" } : {}}
          to="/singin"
        >
          Registrarse
          {location.pathname === "/singin" ? <i></i> : <span></span>}
        </Links>
      </NavBar>
      <section>
        <Outlet></Outlet>
      </section>
    </Container>
  );
};

const Links = styled(Link)`
  margin: 10px 0 0 0;
  font-size: 2rem;
  color: #8f8f8f;
  text-decoration: none;
  display:grid;
  grid-gap:.75rem;
  &:hover {
    color: #45f3ff;
  }

  i {
    position: relative;
    width: 100%;
    height: .2rem;
    background: #45f3ff;
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
  }
`;

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;

const NavBar = styled.nav`
  position: relative;
  margin-top: 3.5rem;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    background-color: red;
  }
`;

export default Root;
