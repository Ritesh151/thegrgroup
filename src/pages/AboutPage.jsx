import React from 'react';
import { Footer, Navbar } from "../components";
import './About.css';

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <div className="about-page container my-4 py-4">
        <h1 className="text-center">About Us</h1>
        <hr />

        {/* Owner + About Section */}
        <div className="about-main-section">
          {/* Owner Image & Info */}
          <div className="about-owner">
            <img 
              src="https://t3.ftcdn.net/jpg/14/96/14/10/360_F_1496141058_GtJwQNdqF7XK4CMIZUDzLvoOomY9DNK7.jpg" 
              alt="Owner Gaurangsinh Narendrasinh Rathod" 
            />
            <h5>Gaurangsinh Narendrasinh Rathod</h5>
            <p>Founder & Owner</p>
          </div>

          {/* About Company Text */}
          <div className="about-text">
            <p>
              <strong>THE GR GROUP</strong> is a trusted name in <strong>Construction Support & Equipment Rental Services</strong>, 
              offering top-notch solutions in <strong>Scaffolding Services and Accessories, Construction Equipment</strong>.
              <br /><br />
              Under the leadership of <strong>Gaurangsinh Narendrasinh Rathod</strong>, we’ve built a reputation for excellence, 
              commitment, and on-time delivery in the construction industry.
              <br /><br />
              <strong>Location:</strong><br />
              24, Shyam Trade Center, Kathwada-Singarva Road,<br />
              Opp. Ambuja Cement Godown, Kathwada, Ahmedabad - 382430
              <br /><br />
              <strong>Contact:</strong><br />
              +91 9697979607, +91 9904693899
            </p>
          </div>
        </div>

        {/* Our Services */}
        <h2 className="text-center py-4">Our Services</h2>
        <div className="row about-services">
          {[
            {
              title: 'Scaffolding Services',
              img: 'https://www.winntus.com/uploaded-files/category/images/thumbs/Scaffolding-Rental-Service-thumbs-500X500.jpg',
            },
            {
              title: 'Accessories',
              img: 'https://www.adsf.ae/media/k2/categories/21.jpg',
            },
            {
              title: 'Construction Equipment',
              img: 'https://www.accurainfracon.com/assets/img/construction-equipment.webp',
            },
          ].map((service, idx) => (
            <div className="col-md-4 col-sm-6 mb-3 px-3" key={idx}>
              <div className="card about-card h-100">
                <img 
                  className="card-img-top img-fluid" 
                  src={service.img} 
                  alt={service.title} 
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{service.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
