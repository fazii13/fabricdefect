import React from 'react';
import newt from '../images/hero-bg.png';
import belt from '../images/belt.png';
import manu from '../images/manu.png';
import machine from '../images/machine.jpg';

const Header = () => {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src={newt} alt="Hero Background" />
        </div>
      </div>

      {/* Slider Section */}
      <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>Textile Vision</h1>
                      <p>
                        TextileVision Technologies is at the forefront of innovation with our advanced Fabric Defect Detection System, founded to transform the textile industry. Using state-of-the-art computer vision and deep learning technologies, we offer unparalleled services to boost your productivity.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={belt} alt="Slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>Advanced Solutions<br />& Technology</h1>
                      <p>
                        Textile Vision Technologies is revolutionizing textile quality with our Fabric Defect Detection System. Leveraging cutting-edge computer vision and deep learning, we offer top-tier services like Auto Fabric Inspection and Detailed Defect Analysis to ensure optimal quality and efficiency. Discover how our innovative solutions can elevate your textile processes.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={manu} alt="Slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>Pioneers in Textile  <br /> Inspection & Assurance</h1>
                      <p>
                        As pioneers in textile inspection, our research delves deep into various fabric defects, providing precise and reliable solutions. Join us in redefining textile quality assurance with TextileVision’s cutting-edge technology.
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn1">Read More</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src={machine} alt="Slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li data-bs-target="#customCarousel1" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
            <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
          </ol>
        </div>
      </section>
      {/* End Slider Section */}
    </div>
  );
}

export default Header;
