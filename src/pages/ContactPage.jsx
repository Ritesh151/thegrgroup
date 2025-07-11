import React, { useRef, useState } from "react";
import { Footer, Navbar } from "../components";
import emailjs from '@emailjs/browser';
import './Contact.css';

const ContactPage = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_sj38lit',     // Replace with your EmailJS Service ID
      'template_a7b0ust',    // Replace with your EmailJS Template ID
      form.current,
      'ZTCLhAaMNdygcXgh5'      // Replace with your EmailJS Public/User Key
    ).then((result) => {
      console.log(result.text);
      setSent(true);
      form.current.reset();  // Clear form after submission
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <>
      <Navbar />
      <div className="contact-page container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  id="Name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="user_email"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  name="message"
                  id="Message"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button className="btn btn-dark px-4" type="submit">
                  Send
                </button>
              </div>
              {sent && <p className="text-success text-center mt-3">Message sent successfully!</p>}
            </form>
          </div>

          {/* Google Map */}
          <div className="col-md-6 mb-4">
            <h5 className="mb-3">Our Location</h5>
            <div className="ratio ratio-4x3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3528354198884!2d72.69872997531452!3d23.047522579156347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e874087b63471%3A0xb66aeece12d94d53!2sShyam%20Trade%20Center!5e0!3m2!1sen!2sin!4v1750674504857!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Company Location"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
