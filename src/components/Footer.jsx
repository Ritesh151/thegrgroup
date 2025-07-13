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
            <p className="footer-info">thegrgroup0304@gmail.com</p>
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
          {/* Column 4 - Location Map */}
<div className="col-md-3 mb-4">
  <h5 className="footer-title">Our Location</h5>
  <div className="map-responsive" style={{ borderRadius: "10px", overflow: "hidden" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3528354198884!2d72.69872997531452!3d23.047522579156347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e874087b63471%3A0xb66aeece12d94d53!2sShyam%20Trade%20Center!5e0!3m2!1sen!2sin!4v1750674504857!5m2!1sen!2sin"
      width="100%"
      height="200"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Shyam Trade Center Location"
    ></iframe>
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
