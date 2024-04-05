import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "../../style/user/navbar.css";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand>
        <NavLink className="nav-brand" to={"/"}>
          SkillStack
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto custom-nav-links">
          <NavLink to={"/services"} className="nav-link" id="nav-link-1">
            Services
          </NavLink>
          <NavLink to={"/Signin"} className="nav-link">
            Signup / Signin
          </NavLink>
          <NavLink to={"/admin-login"} className="nav-link" id="become-tasker">
            Become a Tasker
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
