import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../1234.jpg';
import './CSS/Navbar.css';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark py-3 sticky-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
            The GR Group
          </NavLink>
          <button
            className="navbar-toggler mx-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto my-2 text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/brochure">
                  Brochure
                </NavLink>
              </li>
            </ul>
            <div className="buttons text-center">
              <NavLink to="/cart" className="btn btn-outline-dark m-2">
                <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom Info Strip Below Navbar */}
      <div className="custom-info-bar">
        <div className="company-info">
          <img src={logo} alt="GR Group Logo" />
          <div>
            <h5>THE GR GROUP</h5>
            <p>
              <i className="fa fa-map-marker-alt text-warning me-1"></i> Kathwada, Ahmedabad, Gujarat
            </p>
            <p>
              <i className="fa fa-check-circle text-warning me-1"></i> GST No. - <strong>24XXXXXXXXXX1Z0</strong>
            </p>
          </div>
        </div>

        <div className="action-boxes">
          <div className="phone-box">
            <i className="fa fa-phone-alt text-warning"></i> <strong>+91 9697979607</strong>
            <br />
            <span style={{ fontSize: '0.8rem', color: '#aaa' }}>88% Response rate</span>
          </div>

          <a
            href="https://wa.me/+918980614160/"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <i className="fa fa-whatsapp"></i> Send a Message
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
