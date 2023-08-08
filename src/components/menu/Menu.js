import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

const Menu = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark" id="menu">
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="#home">Pokédex</Navbar.Brand>
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
