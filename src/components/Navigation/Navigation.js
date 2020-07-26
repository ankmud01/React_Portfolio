import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Nav defaultActiveKey='/home' as='ul'>
      <Link
        to='/'
        className={(useLocation.pathname === '/') === 'About' ? 'nav-link-active': 'nav-link'}>
        About
      </Link>
      <Link
        to='/portfolio'
        className={useLocation.pathname === '/portfolio' ? 'nav-link-active' : 'nav-link'}>
        Portfolio
      </Link>
      <Link
        to='/contact'
        className={useLocation.pathname === '/contact' ? 'nav-link-active' : 'nav-link'}>
        Contact Me
      </Link>
    </Nav>
  );
}
