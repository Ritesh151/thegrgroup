import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="gr-footer">
      <div className="container">
        <div className="row text-start">
          {/* Column 1 - Company Info */}
          <div className="col-md-3 mb-4">
            <h4 className="footer-title">THE GR GROUP</h4>
            <p className="footer-desc">
              We specialize in Scaffolding Services, Accessories, and
              Construction Equipment, offering top-tier solutions for modern
              infrastructure development.
            </p>
            <p className="footer-desc">
              <strong>Owner:</strong> Gaurangsinh Narendrasinh Rathod
            </p>
          </div>

          {/* Column 2 - Address */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Office</h5>
            <p className="footer-info">
              24, Shyam Trade Center,<br />
              Kathwada-Singarva Road,<br />
              Opp Ambuja Cement Godown,<br />
              Kathwada, Ahmedabad – 382430
            </p>
            <p className="footer-info">riteshgajjarop1510@gmail.com</p>
            <p className="footer-info">+91 96979 79607</p>
            <p className="footer-info">+91 99046 93899</p>
          </div>

          {/* Column 3 - Links */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/brochure">Brochure</Link></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Newsletter</h5>
            <form className="d-flex mb-3">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-light" type="submit">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
            <div className="social-icons d-flex gap-3">
              <a href="#" className="text-white fs-5"><i className="fa fa-facebook"></i></a>
              <a href="#" className="text-white fs-5"><i className="fa fa-twitter"></i></a>
              <a href="#" className="text-white fs-5"><i className="fa fa-instagram"></i></a>
              <a href="#" className="text-white fs-5"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center small m-0">
          © THE GR GROUP 2025 – All Rights Reserved 💝 Made by Ritesh Gajjar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
