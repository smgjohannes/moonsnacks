import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
// import Footer from '../Footer/Footer';
import './NavBar.css';

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleNavLinkClick = (path) => {
    handleClick();
    navigate(path);
  };

  return (
    <>
      <nav className='w3-top'>
        <Link to='/' className='logo'>
          <img
            src='/Imgs/logo.png'
            alt='Logo'
            style={{ height: '70px', width: '100%', objectFit: 'cover' }}
          />
        </Link>
        <div>
          <ul id='navbar' className={clicked ? 'active' : ''}>
            <li
              className='w3-bar-item w3-button'
              onClick={() => handleNavLinkClick('/welcome')}>
              Coming Soon
            </li>
            <li
              className='w3-bar-item w3-button'
              onClick={() => handleNavLinkClick('/products')}>
              PRODUCTS
            </li>
            <li
              className='w3-bar-item w3-button'
              onClick={() => handleNavLinkClick('/about')}>
              ABOUT US
            </li>
            <li
              className='w3-bar-item w3-button'
              onClick={() => handleNavLinkClick('/news')}>
              NEWS & UPDATES
            </li>
            <li
              className='w3-bar-item w3-button'
              onClick={() => handleNavLinkClick('/shop')}>
              SHOP
            </li>
            <li
              className='w3-bar-item w3-button'
              onClick={() => handleNavLinkClick('/blog')}>
              BLOG
            </li>
            <li
              className='w3-bar-item w3-button'
              onClick={() => handleNavLinkClick('/contact')}>
              CONTACT US
            </li>
          </ul>
        </div>
        <div id='mobile' onClick={handleClick}>
          <button id='bar' className={clicked ? 'FaTimes' : 'FaBars'}>
            {clicked ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
