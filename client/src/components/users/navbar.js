import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "../../style/user/navbar.css";

function NavbarComponent() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto custom-nav-links">
          <Nav.Link href="#home" id="nav-link-1">Services</Nav.Link>
          <Nav.Link href="#link">Signup / Login</Nav.Link>
          <Nav.Link href="#contact" id="become-tasker">Become a Tasker</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
