import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  return (
    <header className="header_section fixed-top">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="/">
            <span>Textile Vision</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" smooth to="/#home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#why-us">Why Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#team">Team</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-user" aria-hidden="true"></i> Login</a>
              </li>
              <form className="form-inline">
                <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
