import React from 'react';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/responsive.css';
import '../css/style.css';

const InfoSection = () => {
  return (
    <section className="info_section layout_padding2">
      <div className="container">
        <div className="row">
          {/* Address Column */}
          <div className="col-md-6 col-lg-3 info_col">
            <div className="info_contact">
              <h4>Address</h4>
              <div className="contact_link_box">
                <a href="#">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>University of Management & Technology</span>
                </a>
                <a href="tel:+92-3096737477">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +92-3096737477</span>
                </a>
                <a href="mailto:textile@gmail.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>textile@gmail.com</span>
                </a>
              </div>
            </div>
            
            <div className="info_social">
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          
          {/* Info Column */}
          <div className="col-md-6 col-lg-3 info_col">
            <div className="info_detail">
              <h4>Info</h4>
              <p>
              We are committed to delivering exceptional service and support. Our dedicated team is here to assist you with any inquiries and ensure your experience with us is outstanding.
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-2 mx-auto info_col">
            <div className="info_link_box">
              <h4>Links</h4>
              <div className="info_links">
                <a className="active" href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="service.html">Services</a>
                <a href="why.html">Why Us</a>
                <a href="team.html">Team</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 mx-auto info_col">
            <div className="info_link_box">

            </div>
          </div>
   
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
