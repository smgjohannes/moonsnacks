// NavBar.js
import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();

  const showNavBar = () => {
    setNavOpen(!navOpen);
  };

  const closeNavBar = () => {
    setNavOpen(false);
  };

  const navRef = useRef();

  const handleNavLinkClick = (path) => {
    closeNavBar();
    navigate(path);
  };

  return (
    <div>
    <header>
      <div className='logo'>
        <Link to="/">
          <img src="/Imgs/logo.png" alt="Logo" style={{ height: '120px' }} />
        </Link>
      </div>
      <nav ref={navRef} className={navOpen ? 'responsive_nav' : 'w3-mobile'}>
        <Link to="/products" className='w3-bar-item w3-button' onClick={() => handleNavLinkClick('/products')}>
          PRODUCTS
        </Link>
        <Link to="/about" className='w3-bar-item w3-button' onClick={() => handleNavLinkClick('/about')}>
          ABOUT US
        </Link>
        <Link to="/news" className='w3-bar-item w3-button' onClick={() => handleNavLinkClick('/news')}>
          NEWS & UPDATES
        </Link>
        <Link to="/shop" className='w3-bar-item w3-button' onClick={() => handleNavLinkClick('/shop')}>
          SHOP
        </Link>
        <Link to="/blog" className='w3-bar-item w3-button' onClick={() => handleNavLinkClick('/blog')}>
          BLOG
        </Link>
        <Link to="/contact" className='w3-bar-item w3-button' onClick={() => handleNavLinkClick('/contact')}>
          CONTACT US
        </Link>
      </nav>

      <button className='nav-btn nav-close-btn' onClick={showNavBar}>
        <FaBars />
      </button>
      <button className='nav-btn' onClick={closeNavBar}>
        <FaTimes />
      </button>
    </header>
    

    <div style={{ position: 'relative' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
