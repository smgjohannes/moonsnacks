// Home.js
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Carousel from 'react-bootstrap/Carousel';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Home.css';
import img1 from '../../Images/4s.webp';
import img2 from '../../Images/1.png';
import img3 from '../../Images/honeyroastedpeanuts17-720x540.jpg';
import img4 from '../../Images/2.jpg';
import img5 from '../../Images/3.jpeg';
import img6 from '../../Images/img8.png'
import img7 from '../../Images/img7.png'

function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2)); 
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0)); 
  };
  return (
    <>
  
      <div className="sec1">
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img style={{height:'100vh'}}
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
          <img style={{height:'100vh'}}
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
          <img style={{height:'100vh'}}
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
          <img style={{height:'100vh'}}
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
          <img style={{height:'100vh'}}
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
              <img style={{ height: '225px'}} className="d-block w-100" src={img2} alt="First slide" />
              <img style={{ height: '225px' }} className="d-block w-100" src={img3} alt="First slide" />
              <div className='w3-row sec2_row3'>
                <img style={{ height: '225px' }} className="d-block w-100" src={img4} alt="First slide" />
                <img style={{ height: '225px'}} className="d-block w-100" src={img5} alt="First slide" />
              </div>
            </div>
          </div>
      </div>
      </div>

      {/* section 3 */}
      <section>
      <div className='sec3_container'>
        <h3 className='section-header'>
          TESTIMONIALS.
        </h3>
        <h2 className='section-headerp'>
          <span>What our Customers Say...</span>
        </h2>
        <div className='testimonials'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className='single-item'>
                <div className='row'>
                  <div className='col-md-5'>
                  <div className='lines'>
                      <div className='line1'></div>
                      <div className='line2'></div>
                    </div>
                    <div className='profile'>
                      <div className='image_area'>
                        <img src={img1} alt='customer1'/>
                      </div>
                    </div>
                    <div className='bio'>
                      <h2>Dyson</h2>
                      <h4>Web Designer</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='content'>
                      <p>
                        <span><FaQuoteLeft/></span>
                        The only exception are autoplaying carousels with the data-bs-ride="carousel" attribute as these are initialized automatically on page load. If you’re using autoplaying carousels with the data attribute, don’t explicitly initialize the same carousels with the constructor method.
                        <span className='FaQuoteRight'><FaQuoteRight/></span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </Carousel.Item>
          
            <Carousel.Item>
              <div className='single-item'>
                <div className='row'>
                  <div className='col-md-5'>
                  <div className='lines'>
                      <div className='line1'></div>
                      <div className='line2'></div>
                    </div>
                    <div className='profile'>
                      <div className='image_area'>
                        <img src={img2} alt='customer2'/>
                      </div>
                    </div>
                    <div className='bio'>
                      <h2>Johannes</h2>
                      <h4>Admin</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='content'>
                      <p>
                        <span><FaQuoteLeft/></span>
                        The only exception are autoplaying carousels with the data-bs-ride="carousel" attribute as these are initialized automatically on page load. If you’re using autoplaying carousels with the data attribute, don’t explicitly initialize the same carousels with the constructor method.
                        <span className='FaQuoteRight'><FaQuoteRight/></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='single-item'>
                <div className='row'>
                  <div className='col-md-5'>
                  <div className='lines'>
                      <div className='line1'></div>
                      <div className='line2'></div>
                    </div>
                    <div className='profile'>
                      <div className='image_area'>
                        <img src={img3} alt='customer2'/>
                      </div>
                    </div>
                    <div className='bio'>
                      <h2>Shayne</h2>
                      <h4>Supervise</h4>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='content'>
                      <p>
                        <span><FaQuoteLeft/></span>
                        The only exception are autoplaying carousels with the data-bs-ride="carousel" attribute as these are initialized automatically on page load. If you’re using autoplaying carousels with the data attribute, don’t explicitly initialize the same carousels with the constructor method.
                        <span className='FaQuoteRight'><FaQuoteRight/></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          
          <div className='w3-container w3-margin-top w3-center'>
                <button className="w3-button w3-circle w3-gray w3-center" onClick={handlePrev}>{'<'}</button>
                <button className="w3-button w3-circle w3-gray w3-center" onClick={handleNext}>{'>'}</button>
              </div>
        </div>
      </div>
      </section>
       {/* section 4 */}
       <div className='sec4'>
        <h2 className='section-headerp'>
          <span>Latest From Our Blog</span>
        </h2>

        <div className="w3-row-padding w3-margin-top d-flex justify-content-center section4_Out_container">
        <div className="w3-third sec4_inner_container mb-4 ">
          <div className="w3-card-4 sec4_card_container sec4_card_container1 " >
            <div className="w3-container w3-center img_container2">
              <img src={img1} style={{ width: '100%' }} alt='customer1' />
              <div className="img_caption"><h6>Smoking Snack</h6></div>
            </div>
            <div className='w3-container card-content'>
              <h3>Peanut-Based Snacks: A Nutty Choice for Health and Flavours </h3>
              </div>
            <div className='w3-container'>
                <button className="w3-button w3-circle w3-gray w3-right">{'>'}</button>
            </div>
          </div>
        </div>
          <div className="w3-third sec4_inner_container mb-4" >
            <div className="w3-card-4 sec4_card_container sec4_card_container2">
              <div className="w3-container w3-center img_container2">
                <img src={img2} style={{ width: '100%' }} alt='customer1' />
                <div className="img_caption"><h6>Nutty Flavour</h6></div>
              </div>
              <div className='w3-container  card-content'>
                <h3>The Taste: Discover our story on the Flavour choice. </h3>
              </div>
              <div className='w3-container'>
                  <button className="w3-button w3-circle w3-gray w3-right">{'>'}</button>
                </div>
            </div>
            </div>
          <div className="w3-third sec4_inner_container mb-4" >
            <div className="w3-card-4 sec4_card_container sec4_card_container3">
              <div className="w3-container w3-center img_container3">
                <img src={img4} style={{ width: '100%' }} alt='customer1' />
                <div className="img_caption"><h6>Cool Events</h6></div>
              </div>
              <div className='w3-container card-content'>
                <h3>Open-shop Event: The Place to be for everyone. </h3>
              </div>
                  <button className="w3-button w3-circle w3-gray w3-right">{'>'}</button>
              
            </div>
          </div>
        </div>
      </div>

      {/* section 5 */}
      <div className='sec5'>
      <h2 className='section5-headerh'>
        <span>Follow Our Events</span>
      </h2>
      <p className='section5-headerp'>
        Stay updated with our latest appearances! Join us at these upcoming events:
      </p>
      <div className="w3-row-padding w3-margin-top d-flex justify-content-center section5_Out_container">
        <div className="w3-third w3-margin-right sec5_inner_container mb-4">
          <div className="w3-card-4 w3-margin-right sec5_card_container sec5_card_container2">
            <div className="w3-container sec5_img_container2 text-center ">
              <img src={img6} alt='customer1' />
            </div>
            <div className='w3-container'>
              <h6>KasiVibe Festival (Event poster)</h6>
              <h7>Location: Sam Nujoma Stadium</h7>
              <br></br>
              <p>we'll be at the KasiVibe Festifal, bringing the crunchies Peanut Burgers- Original flavour to you. Don't miss out</p>
              <div className='w3-container w3-margin-bottom'>
                <button className="w3-button w3-circle w3-gray w3-right">{'>'}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w3-third w3-margin-left sec5_inner_container  mb-4">
          <div className="w3-card-4 w3-margin-left sec5_card_container sec5_card_container3">
            <div className="w3-container sec5_img_container3 text-center">
              <img src={img7} alt='customer1' />
            </div>
            <div className='w3-container'>
            <h6>Spring Market</h6>
              <h7>Location: Country Club</h7>
              <br></br>
              <p>Come and find us at the Weekend Market. Sample our delicious snacks and take home your favorites</p>
              <div className='w3-container w3-margin-bottom'>
                <button className="w3-button w3-circle w3-gray w3-right">{'>'}</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


    </>
  );
}

export default Home;
