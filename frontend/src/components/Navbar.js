import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="border-body text-bg-success shadow-sm"
      style={{
        height: "70px",
        zIndex: 1050,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(40, 167, 69, 0.95)",
      }}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/Home"
          style={{
            fontSize: "32px",
            fontFamily: "'Fanwood Text', serif",
            fontWeight: "bold",
            textDecoration: "none",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ marginRight: "10px" }}>🏥</span>
          CureTech
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/Home"
              style={{
                paddingRight: "30px",
                fontSize: "18px",
                fontWeight: "500",
                color: "white",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#c2efd4";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/About"
              style={{
                paddingRight: "30px",
                fontSize: "18px",
                fontWeight: "500",
                color: "white",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#c2efd4";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
                e.target.style.transform = "translateY(0)";
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Services"
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "white",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#c2efd4";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "white";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Diagnosis
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
