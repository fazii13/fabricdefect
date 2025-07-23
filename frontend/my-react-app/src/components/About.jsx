import React from 'react';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/responsive.css';
import '../css/style.css';

import garment from '../images/garment.png'


const About = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            About <span>Us</span>
          </h2>
          <p>
          Revolutionizing fabric quality with advanced AI-driven defect detection and seamless integration.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={garment} alt="About Us" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h3>At Textile Vision</h3>
              <p>
               We provide groundbreaking solutions in textile quality control through our advanced Fabric Defect Detection System. Leveraging cutting-edge computer vision and deep learning algorithms, our technology ensures precise and reliable fabric inspection. Our dedicated research team investigates a wide range of fabric defects, such as stains, holes, and misweaves, to keep our solutions at the industry's forefront. Committed to innovation and excellence, TextileVision seamlessly integrates into existing processes, boosting productivity and guaranteeing top-notch quality assurance.
              </p>
              <p>
              Discover how our expertise and technology can transform your textile quality control.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
