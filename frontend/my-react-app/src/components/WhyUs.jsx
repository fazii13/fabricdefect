import React from 'react';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/responsive.css';
import '../css/style.css';
import detect from '../images/detect.png'
import monitor from '../images/monitor.png'
import integration from '../images/accuracy.png'
import w4 from '../images/w4.png'

const WhyUs = () => {
  return (
    <section className="why_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Why Choose <span>Us</span>
          </h2>
        </div>
        <div className="why_container">
          <div className="box">
            <div className="img-box">
              <img src={detect} alt="Expert Management" />
            </div>
            <div className="detail-box">
              <h5>Advanced Detection Technology</h5>
              <p>
                "Experience the power of our cutting-edge technology, designed to catch every defect with precision. Our advanced systems ensure that nothing slips through the cracks. You can trust us to maintain top-quality standards effortlessly."
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src={monitor} alt="Secure Investment" />
            </div>
            <div className="detail-box">
              <h5>Real Time Monitoring and Alerts</h5>
              <p>
              "Stay on top of your production with real-time monitoring and instant alerts. Our system keeps you informed about issues as they happen, allowing for quick fixes and minimal disruption. It’s like having a quality control expert on duty 24/7."
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src={integration} alt="Instant Trading" />
            </div>
            <div className="detail-box">
              <h5>Spotless Accuracys</h5>
              <p>
              "Enjoy unparalleled accuracy in detecting even the tiniest defects. Our technology is engineered to deliver spotless results, so you get the highest quality every time. Say goodbye to guesswork and hello to flawless fabric."
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <img src={w4} alt="Happy Customers" />
            </div>
            <div className="detail-box">
              <h5>User Friendly Support</h5>
              <p>
              "Benefit from easy-to-use systems and friendly, expert support. We provide straightforward training and ongoing assistance to ensure you get the most out of our technology. Our goal is to make your experience as smooth and hassle-free as possible."
              </p>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="#">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

