import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../img/logo.jpg';
import '../index.css';

const NAV_DATA = [
  { name: 'HomePage', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Sermons', path: '/sermons' },
  { name: 'Galleries', path: '/galleries' },
  { name: 'Contact', path: '/contact' }
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-light navbar-light sticky-top shadow-lg">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ width: '15%' }}>
          <img src={logo} width={60} alt="UCEM logo" />
          <span className="h3 fw-bold align-middle">(UCEM)</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="mynavbar">
          <ul className="navbar-nav">
            {NAV_DATA.map((navItem, index) => (
              <li key={index} className="nav-item mx-3">
                <NavLink
                  className="nav-link fw-bold"
                  id="navlink"
                  aria-current="page"
                  to={navItem.path}
                >
                  {navItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;