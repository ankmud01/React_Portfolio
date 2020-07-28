import React from 'react';
import { Navbar } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> 
            <Navbar.Brand href="#home">Ankit Mudvari</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="responsive-navbar-nav">
                <Navigation />
            </Navbar.Collapse>
        </Navbar>
    </header>
  );
}