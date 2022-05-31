import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarItem() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Donation Project</Navbar.Brand>
        <Nav className="justify-content-end">
         <Nav.Link to="/">Anasayfa</Nav.Link>
         <Nav.Link to="/">Toplanan Bağışlar</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarItem;
