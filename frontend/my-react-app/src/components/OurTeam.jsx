import React from 'react';
import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/responsive.css';
import '../css/style.css';
import Fazi from '../images/Fazi.jpeg';
import FaziH from '../images/FaziH.jpeg';
import Talha from '../images/Talha.jpeg';
import TeamImage from '../images/design.jpg'; // Make sure to import your new image

const OurTeam = () => {
  return (
    <section className="team_section layout_padding">
      <div className="container-fluid">
        <div className="heading_container heading_center">
          <h2>
            Our <span>Team</span>
          </h2>
        </div>

        <div className="team_container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src={Fazi} className="img1" alt="Muhammad Faizan" />
                </div>
                <div className="detail-box">
                  <h5>Muhammad Faizan</h5>
                  <p>AI Specialist</p>
                </div>
                <div className="social_box">
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
                  <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src={FaziH} className="img1" alt="Faizan Haider" />
                </div>
                <div className="detail-box">
                  <h5>Faizan Haider</h5>
                  <p>Data Engineer</p>
                </div>
                <div className="social_box">
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
                  <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="box">
                <div className="img-box">
                  <img src={Talha} className="img1" alt="Talha Qadri" />
                </div>
                <div className="detail-box">
                  <h5>Talha Qadri</h5>
                  <p>Market Research Analyst</p>
                </div>
                <div className="social_box">
                  <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className='socialIcon'>
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
                  <a href="https://www.youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team-image-container">
          <img src={TeamImage} alt="Team" className="team-image" />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
