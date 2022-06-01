import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarItem() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Donation Project</Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to="/">
                Anasayfa
              </Nav.Link>
              <Nav.Link as={Link} to="/donations">
                Toplam Bağış
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
  );
}

export default NavbarItem;
