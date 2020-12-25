import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

const NavigationBar = () =>{
    return( <Navbar bg="primary" expand="lg">
    <Link to="/"> <Navbar.Brand href="#home">amazona</Navbar.Brand></Link>
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
}

export default NavigationBar;