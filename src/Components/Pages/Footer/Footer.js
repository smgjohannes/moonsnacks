import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faInstagramSquare, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link,useNavigate } from 'react-router-dom';
import './Footer.css'

function Footer() {
  const navigate = useNavigate();



  const handleNavLinkClick = (path) => {
    navigate(path);
  };
  
  return (
  <div className='Footer'>
  <footer className="footer">
    
      <div className="column">
      
         <Link to="/">
            <img src="/Imgs/logo.png" alt="Logo" style={{ height: '120px',  width: '320px' }} />
         </Link>
        
      </div>
      <div className="column">
        <h3 className='w3-text-white'>Pages</h3>
        <ul className='ul'>
        <li><Link to="/products" className='w3-bar-item ' onClick={() => handleNavLinkClick('/products')}>
          PRODUCTS
        </Link>
        </li>
        <li>
        <Link to="/about" className='w3-bar-item' onClick={() => handleNavLinkClick('/about')}>
          ABOUT US
        </Link>
        </li>
        <li>
        <Link to="/news" className='w3-bar-item ' onClick={() => handleNavLinkClick('/news')}>
          NEWS & UPDATES
        </Link>
        </li>
        <li>
        <Link to="/shop" className='w3-bar-item ' onClick={() => handleNavLinkClick('/shop')}>
          SHOP
        </Link>
        </li>
        <li>
        <Link to="/blog" className='w3-bar-item ' onClick={() => handleNavLinkClick('/blog')}>
          BLOG
        </Link>
        </li>
        <li>
        <Link to="/contact" className='w3-bar-item ' onClick={() => handleNavLinkClick('/contact')}>
          CONTACT US
        </Link>
        </li>
        </ul>
      </div>
      <div className="column">
        <h3 className='w3-text-white'>Contact</h3>
        <p  className='Contact_P'>Email:bruno.ngh@moonsnacksna.com</p>
        <p  className='Contact_P'>Phone: +264817565534</p>
        <p  className='Contact_P'>Address: No. 1 Peter Mweshihange,</p>
        <p  className='Contact_P'>Street, Kleine Kuppe, Windhoek</p>
      </div>
      <div className="column">
        <h3 className='w3-text-white'>Follow Us</h3>
        <ul className="nav_footer">
                  <li>
                    <a href="#home">
                      <FontAwesomeIcon icon={faInstagramSquare} style={{ color: '#E1306C', fontSize: '30px' }} />
                    </a>
                  </li>
                  <li>
                    <a href="#about">
                      <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877f2', fontSize: '30px' }} />
                    </a>
                  </li>
                  <li>
                    <a href="#clients">
                      <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077B5', fontSize: '30px' }} />
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      <FontAwesomeIcon icon={faSquareXTwitter} style={{ fontSize: '30px' }} />
                    </a>
                  </li>
                </ul>
      </div>
      <div className=' w3-center copyright'>
        <p className='w3-text-white'>
          Copyright &copy; MoonSnacks | Designed by Mindsinaction
        </p>

      </div>
    </footer>

  </div>
  )
}

export default Footer