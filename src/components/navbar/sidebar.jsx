




import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";



function Sidebar() {
  return (
    <Nav className="col-md-12 d-md-block bg-light sidebar" activeKey="/home">
      <div className="sidebar-sticky"></div>
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Sidebar;