import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BiSolidPhoneCall } from 'react-icons/bi';
import './Welcome.css';
import comingSoonPageImage from '../../../assets/images/comoing_bk_picture.jpeg';
import comingSoonPageLogoImage from '../../../assets/images/hippo_logo.png';

function Welcome() {
  return (
    <>
      <div
        className='contentContainer'
        style={{
          backgroundImage: `url(${comingSoonPageImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className='logoContainer'>
          <img
            src={comingSoonPageLogoImage}
            alt='coming_soon_image'
            style={{
              width: '100%',
              objectFit: 'cover',
              height: '100%',
            }}
          />
        </div>
        <div className='headerContainer'>
          <h1>
            <span style={{ color: '#E6EAD9' }}>PREPARE YOUR </span>
            <span style={{ color: '#FFCC06' }}>TASTEBUDS!</span>
          </h1>
          <h4>
            <span style={{ color: '#E6EAD9' }}>This </span>
            <span style={{ color: '#FFCC06' }}>Website </span>
            <span style={{ color: '#E6EAD9' }}>is under </span>
            <span style={{ color: '#FFCC06' }}>DELICIOUS DEVELOPMENT! </span>
          </h4>
        </div>
        <div className='ContactContent'>
          <div className='socialLinksContainer'>
            <h2>Follow us:</h2>
            <h4>@moonsnacksfoods_namibia</h4>
            <ul className='comingSoonSocials'>
              <li>
                <a href='#home' className='circle-icon'>
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href='#about' className='circle-icon'>
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href='#clients' className='circle-icon'>
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a href='#contact' className='circle-icon'>
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>

          <div className='carelineLinksContainer'>
            <h2>Customer Careline:</h2>
            <ul className='comingSoonSocials'>
              <li>
                <a href='#home' className='circle-icon'>
                  <BiSolidPhoneCall
                    style={{ fontSize: '50px', color: '#220F47' }}
                  />
                </a>
              </li>
              <li>
                <a href='#home' className='circle-icon'>
                  <FaWhatsapp />
                </a>
              </li>

              <li>
                <a
                  href='#contact'
                  style={{ textDecoration: 'none', color: '#fff' }}>
                  +264817565534
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
