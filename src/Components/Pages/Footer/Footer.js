import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareXTwitter,
  faInstagramSquare,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className='Footer'>
        <footer className='footer'>
          <div className='footer1'>
            <div className='column'>
              <Link to='/'>
                <img
                  src='/Imgs/logo.png'
                  alt='Logo'
                  style={{ height: '120px', width: '300px' }}
                />
              </Link>
            </div>
            <div className='column'>
              <h3 className='w3-text-white'>Pages</h3>
              <ul className='ul'>
                <li>
                  <Link
                    to='/products'
                    className='w3-bar-item '
                    onClick={() => handleNavLinkClick('/products')}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='w3-bar-item'
                    onClick={() => handleNavLinkClick('/about')}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to='/news'
                    className='w3-bar-item '
                    onClick={() => handleNavLinkClick('/news')}>
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link
                    to='/shop'
                    className='w3-bar-item '
                    onClick={() => handleNavLinkClick('/shop')}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to='/blog'
                    className='w3-bar-item '
                    onClick={() => handleNavLinkClick('/blog')}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='w3-bar-item '
                    onClick={() => handleNavLinkClick('/contact')}>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className='column'>
              <h3 className='w3-text-white'>Contact</h3>
              <p className='Contact_P'>Email:bruno.ngh@moonsnacksna.com</p>
              <p className='Contact_P'>Phone: +264817565534</p>
              <p className='Contact_P'>Address: No. 1 Peter Mweshihange,</p>
              <p className='Contact_P'>Street, Kleine Kuppe, Windhoek</p>
            </div>
            <div className='column'>
              <ul className='nav_footer'>
                <li>
                  <a href='#home'>
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      style={{ color: '#ffff', fontSize: '30px' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#about'>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: '#ffff', fontSize: '30px' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#clients'>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: '#ffff', fontSize: '30px' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#contact'>
                    <FontAwesomeIcon
                      icon={faSquareXTwitter}
                      style={{ color: '#ffff', fontSize: '30px' }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=' w3-center copyright footer1'>
            <p className='w3-text-white'>
              Copyright &copy; MoonSnacks | Designed by Mindsinaction
            </p>
          </div>
        </footer>
      </div>
      <div className='Footer_moble'>
        <footer className='footer'>
          <div className='footer1'>
            <div className='column'>
              <Link to='/' className='linkWithoutUnderline'>
                <h1 className='moon_logo'>MoonSnacks</h1>
              </Link>
            </div>
            <div className='column'>
              <h3 className='w3-text-white'>Pages</h3>
              <ul className='ul'>
                <li>
                  <Link
                    to='/products'
                    className='w3-bar-item '
                    onClick={() => handleNavLinkClick('/products')}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to='/about'
                    className='w3-bar-item'
                    onClick={() => handleNavLinkClick('/about')}>
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to='/news'
                    className='w3-bar-item '
                    onClick={() => handleNavLinkClick('/news')}>
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link
                    to='/shop'
                    className='w3-bar-item '
                    onClick={() => handleNavLinkClick('/shop')}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to='/blog'
                    className='w3-bar-item '
                    onClick={() => handleNavLinkClick('/blog')}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='w3-bar-item '
                    onClick={() => handleNavLinkClick('/contact')}>
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className='column'>
              <h3 className='w3-text-white'>Contact</h3>
              <p className='Contact_P'>Email:bruno.ngh@moonsnacksna.com</p>
              <p className='Contact_P'>Phone: +264817565534</p>
              <p className='Contact_P'>Address: No. 1 Peter Mweshihange,</p>
              <p className='Contact_P'>Street, Kleine Kuppe, Windhoek</p>
            </div>
            <div className='column'>
              <ul className='nav_footer'>
                <li>
                  <a href='#home'>
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      style={{ color: '#ffff', fontSize: '30px' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#about'>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: '#ffff', fontSize: '30px' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#clients'>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: '#ffff', fontSize: '30px' }}
                    />
                  </a>
                </li>
                <li>
                  <a href='#contact'>
                    <FontAwesomeIcon
                      icon={faSquareXTwitter}
                      style={{ color: '#ffff', fontSize: '30px' }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=' w3-center copyright footer1'>
            <p className='w3-text-white'>
              Copyright &copy; MoonSnacks | Designed by Mindsinaction
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
