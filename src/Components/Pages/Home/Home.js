// Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import img1 from '../../Images/nuts-2.jpg';
import img2 from '../../Images/1.png';
import img3 from '../../Images/1200x630wa.png';
import img4 from '../../Images/2.jpg';
import img5 from '../../Images/download.png';

function Home() {

  return (
    <>
  
      <div className="sec1">
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img style={{height:'90vh'}}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption className='h4_Home'>
            <h5>Satisy Your Cravings Today</h5>
            <p className='paragraph'>
            Our Peanut Burgers- Original Flavour are meticulously
            crafted to deliver a satisfying crunch and a burst of irresistible flavor
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'90vh'}}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption className='h4_Home'>
            <h5>Satisfy Your Cravings Today</h5>
            <p>
            Our Peanut Burgers- Original Flavour are meticulously
            crafted to deliver a satisfying crunch and a burst of irresistible flavor
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'90vh'}}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption className='h4_Home'>
            <h5>Satisfy Your Cravings Today</h5>
            <p>
            Our Peanut Burgers- Original Flavour are meticulously
            crafted to deliver a satisfying crunch and a burst of irresistible flavor
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'90vh'}}
            className="d-block w-100"
            src={img4}
            alt="Third slide"
          />
          <Carousel.Caption className='h4_Home'>
            <h5>Satisy Your Cravings Today</h5>
            <p>
            Our Peanut Burgers- Original Flavour are meticulously
            crafted to deliver a satisfying crunch and a burst of irresistible flavor
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'90vh'}}
            className="d-block w-100"
            src={img5}
            alt="Third slide"
          />
          <Carousel.Caption className='h4_Home '>
            <h5>Satisy Your Cravings Today</h5>
            <p>
            Our Peanut Burgers- Original Flavour are meticulously
            crafted to deliver a satisfying crunch and a burst of irresistible flavor
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  
      </div>

      {/* section two */}
      <div className='sec2 w3-center'>
        <div className='sec2_header'>
          <h2>Let's explore why this nutty treats should be your top choice</h2>
          <p>
            When it comes to satisfying your snack cravings, peanuts take center
            stage as a delicious and nutritious option.
          </p>
        </div>
        <div className="w3-row w3-center sec2_row">
          <div className="w3-col s4 w3-center w3-mobile sec2_col1">
            <img style={{ height: '450px' }} className="d-block w-100" src={img1} alt="First slide" />
          </div>
          {/* insider row and col */}
          <div className="w3-col s8 w3-center w3-mobile sec2_col2">
            <div className='w3-row sec2_row2'>
              <img style={{ height: '225px'}} className="d-block w-100" src={img1} alt="First slide" />
              <img style={{ height: '225px' }} className="d-block w-100" src={img1} alt="First slide" />
              <div className='w3-row sec2_row3'>
                <img style={{ height: '225px' }} className="d-block w-100" src={img1} alt="First slide" />
                <img style={{ height: '225px'}} className="d-block w-100" src={img1} alt="First slide" />
              </div>
            </div>
          </div>
      </div>
      </div>

      {/* section 3 */}
      <div id='page' className='site'>
        <div className='third_container'>
          <div className='testi'>
            <div className='head'>
              <h3>TESTIMONIALS.</h3>
              <h1>What our Customers Says...</h1>
            </div>
            <div className='body swiper'>
              <ul className='swiper-wrapper'>
                <li className='swiper-slide'>
                  <div className='wrapper'>
                    <div className='thumbnail'>
                      <img
                          className="d-block w-100"
                          src={img2}
                          alt="Second slide"
                        />
                    </div>
                    <div className='aside'>
                     <p>whjeedbqwebfqhdjwqhenciquhwfiuqhjaddddddddddddddgHGHLlghdgjhGjhvcjhvhhhjvkdavjh   
                      </p>
                      <div className='name'>
                      <h4>
                        Johannes Dyson
                      </h4>
                      <p>
                        Designer
                      </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='swiper-slide'>
                  <div className='wrapper'>
                    <div className='thumbnail'>
                      <img
                          className="d-block w-100"
                          src={img1}
                          alt="Second slide"
                        />
                    </div>
                    <div className='aside'>
                     <p>whjeedbqwebfqhdjwqhenciquhwfiuqhjaddddddddddddddgHGHLlghdgjhGjhvcjhvhhhjvkdavjh   
                      </p>
                      <div className='name'>
                      <h4>
                        Johannes Dyson
                      </h4>
                      <p>
                        Designer
                      </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev"></div>
               <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
         
      </div>


    </>
  );
}

export default Home;
