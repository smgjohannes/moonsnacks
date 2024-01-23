import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faInstagramSquare, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Welcome.css';

function Welcome() {
  return (
    <header>
      <div className='welcomPage'>
        <div className='w3-container'>
          <div className='w3-center content'>
            <div className='w3-card-4 w3-round-large card'>
              <div className='card_wraper'>
                <a href="#home">
                  <img
                    src="/Imgs/logo.png"
                    alt="Logo"
                    style={{ height: '120px' }}
                  />
                </a>
                <h3 className='text'>Coming soon</h3>
                <ul className="nav">
                  <li>
                    <a href="#home">
                      <FontAwesomeIcon icon={faInstagramSquare} style={{ color: '#E1306C', fontSize: '50px' }} />
                    </a>
                  </li>
                  <li>
                    <a href="#about">
                      <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877f2', fontSize: '50px' }} />
                    </a>
                  </li>
                  <li>
                    <a href="#clients">
                      <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077B5', fontSize: '50px' }} />
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      <FontAwesomeIcon icon={faSquareXTwitter} style={{ fontSize: '50px' }} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Welcome;
