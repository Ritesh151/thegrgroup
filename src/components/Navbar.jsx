import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../1234.jpg';
import './CSS/Navbar.css';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      navigate(`/product?search=${encodeURIComponent(trimmedQuery)}`);
      setQuery('');
    }
  };

  return (
    <>
      {/* Top Navbar */}
      <header className="navbar">
        {/* Brand Logo + Name */}
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="GR Group Logo" />
          THE GR GROUP
        </NavLink>

        {/* Center Nav Links */}
        <nav className="navbar-nav">
          <NavLink className="nav-link" exact="true" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/product">Products</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          <NavLink className="nav-link" to="/brochure">Brochure</NavLink>
        </nav>

        {/* Right Side: Search + Cart */}
        <div className="buttons">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <i className="fa fa-search"></i>
            </button>
          </form>

          {/* Cart */}
          <NavLink to="/cart" className="btn btn-outline">
            <i className="fa fa-cart-shopping" style={{ marginRight: '6px' }}></i> Cart ({state.length})
          </NavLink>
        </div>
      </header>

      {/* Info Bar Below Navbar */}
      <div className="custom-info-bar">
        <div className="company-info">
          <img src={logo} alt="GR Group Logo" />
          <div>
            <h5>THE GR GROUP</h5>
            <p><i className="fa fa-map-marker-alt text-warning me-1"></i> Kathwada, Ahmedabad, Gujarat</p>
            <p><i className="fa fa-check-circle text-warning me-1"></i> GST No. - <strong>24XXXXXXXXXX1Z0</strong></p>
          </div>
        </div>

        <div className="action-boxes">
          <div className="phone-box">
            <i className="fa fa-phone-alt text-warning"></i> <strong>+91 9697979607</strong><br />
            <span style={{ fontSize: '0.8rem', color: '#aaa' }}>88% Response rate</span>
          </div>

          <a href="https://wa.me/+918980614160/" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            <i className="fa fa-whatsapp"></i> Send a Message
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
