import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Img from "./assets/pngegg.png"

const Menu = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Img}
            width="130"
            height="50"
            alt=""
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Pokémons</Nav.Link>
          <Nav.Link href="#pricing">Gerações</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
