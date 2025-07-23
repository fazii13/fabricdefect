import React from 'react';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/responsive.css';
import '../css/style.css';
import inspection from '../images/inspection.png'
import analysis from '../images/analysis.png'
import integration from '../images/integration.png'



const Services = () => {
  return (
    <section className="service_section layout_padding">
      <div className="service_container">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Services</span>
            </h2>
            <p>
            We serve our customers with automated inspection, detailed analysis, and seamless integration for superior fabric quality control
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={inspection} alt="Currency Wallet" />
                </div>
                <div className="detail-box">
                  <h5>Auto Fabric Inspection</h5>
                  <p>
                    Our advanced deep learning models and computer vision techniques provide automated, real-time inspection of fabric surfaces, ensuring early detection of defects
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={analysis} alt="Security Storage" />
                </div>
                <div className="detail-box">
                  <h5>Detailed Defect Analysis</h5>
                  <p>
                    Our system not only detects defects but also categorizes and provides detailed analysis, including defect type, size, and location, enabling targeted quality control measures
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src={integration} alt="Expert Support" />
                </div>
                <div className="detail-box">
                  <h5>Customizable Integration</h5>
                  <p>
                    Our solution is designed to be easily integrated seamlessly with existing manufacturing systems, offering customizable features to suit specific operational and business needs
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="#">View All</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
