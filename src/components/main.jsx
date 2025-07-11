// Home.jsx
import React from "react";
import "./CSS/Home.css";

const Home = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>

      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="https://colegqs.com/wp-content/uploads/2015/11/Construction-Slider-11.jpg"
            className="d-block w-100"
            alt="Slide 1"
            style={{ height: "calc(100vh - 56px)", minHeight: "400px", objectFit: "cover", opacity: 0.9 }}
          />
          <div className="carousel-caption text-start">
            <h1 className="display-4 fw-bold mb-3 mb-md-4" style={{ color: "#ffd700", textShadow: "1px 1px 2px #000", fontSize: "calc(1.5rem + 2vw)" }}>
              Iraade Steel Se Majboot
            </h1>
            <p className="d-none d-md-block" style={{ color: "#eee", maxWidth: "600px" }}>Not just structure, building trust.</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="https://image.slidesdocs.com/responsive-images/background/3d-render-of-construction-site-featuring-residential-building-crane-and-excavator-powerpoint-background_ecf30e9cd2__960_540.jpg"
            className="d-block w-100"
            alt="Slide 2"
            style={{ height: "calc(100vh - 56px)", minHeight: "400px", objectFit: "cover", opacity: 0.9 }}
          />
          <div className="carousel-caption text-start">
            <h1 className="display-4 fw-bold mb-3 mb-md-4" style={{ color: "#ffd700", textShadow: "1px 1px 2px #000", fontSize: "calc(1.5rem + 2vw)" }}>
              Quality You Can Rely On
            </h1>
            <p className="d-none d-md-block" style={{ color: "#eee", maxWidth: "600px" }}>Premium scaffolding solutions for every project.</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="https://suryanandaninfraa.com/wp-content/uploads/2022/12/s3.jpeg"
            className="d-block w-100"
            alt="Slide 3"
            style={{ height: "calc(100vh - 56px)", minHeight: "400px", objectFit: "cover", opacity: 0.9 }}
          />
          <div className="carousel-caption text-start">
            <h1 className="display-4 fw-bold mb-3 mb-md-4" style={{ color: "#ffd700", textShadow: "1px 1px 2px #000", fontSize: "calc(1.5rem + 2vw)" }}>
              Fast & Safe Construction
            </h1>
            <p className="d-none d-md-block" style={{ color: "#eee", maxWidth: "600px" }}>
              Engineered for efficiency and safety on site.
            </p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <img
            src="https://suryanandaninfraa.com/wp-content/uploads/2022/12/163222364915633155.jpeg"
            className="d-block w-100"
            alt="Slide 4"
            style={{ height: "calc(100vh - 56px)", minHeight: "400px", objectFit: "cover", opacity: 0.9 }}
          />
          <div className="carousel-caption text-start">
            <h1 className="display-4 fw-bold mb-3 mb-md-4" style={{ color: "#ffd700", textShadow: "1px 1px 2px #000", fontSize: "calc(1.5rem + 2vw)" }}>
              Innovation in Steel
            </h1>
            <p className="d-none d-md-block" style={{ color: "#eee", maxWidth: "600px" }}>
              Combining strength and technology for the future.
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;