import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../Images/1.png';
import img2 from '../../Images/img7.png';
import img3 from '../../Images/img8.png';
import img4 from '../../Images/news.jpg';
import img5 from '../../Images/news1.jpg';
import img6 from '../../Images/news2.jpg';
import img7 from '../../Images/news3.jpg';
import img9 from '../../Images/n_sec7.png';
import newsImage from '../../../assets/images/news4.png';
import './News.css';
import PageHeading from '../../Heading';

function News() {
  return (
    <>
      {/* section1 starts */}
      <PageHeading primary={true} title={'News & Updates'} img={img1} />

      {/* section 2 starts */}
      <div className='news2'>
        <h2 className='news2_mainheader'>Latest Update</h2>
        <div className='w3-card-4 w3-mobile news2_container'>
          <div className='news2_container__div1'>
            <img
              src={newsImage}
              alt='Pic'
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className=' news2_container__div2'>
            <div className='news2_container__div2--item1'>
              <h3>
                Naban Invests Heavily in Moonsnacks:<br></br> Boosting Growth
                and Innovation
              </h3>
              <h4>
                The Namibia Business Angel Network (Naban), an esteemed
                non-profit organization dedicated to fostering start-up growth,
                has made a substantial investment ranging from N$100,000 to
                N$200,000 in Moonsnacks, an enterprising Namibian youth-owned
                snack food company.
              </h4>
            </div>
            <div className='news2_container__div2--item2'>
              <button className='explore_button'>
                <h2>Explore More </h2>
                <FontAwesomeIcon icon={faArrowRight} className='arrow_icon' />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 ends */}

      {/* section 3 starts */}
      <div className='n_sec4'>
        <h2 className='n_sec4-headerh'>
          <span>Follow Our Events</span>
        </h2>
        <p className='n_sec4-headerp'>
          Stay updated with our latest appearances!Join<br></br> us at these
          upcoming events:
        </p>
        <Carousel indicators={false} className='n_sec3_caroursel'>
          <Carousel.Item>
            <div className='n_sec4__caroursel'>
              {' '}
              <div className='w3-third n_sec4_inner_container mb-4'>
                <div className='w3-card-4 n_sec4_card_container n_sec4_card_container2'>
                  <div className='w3-container n_sec4_img_container2 text-center '>
                    <img src={img2} alt='customer1' />
                  </div>
                  <div className='w3-container n_sec4_headers'>
                    <h4>KasiVibe Festival (Event poster)</h4>
                    <h6>Location: Sam Nujoma Stadium</h6>
                    <h6>
                      we'll be at the KasiVibe Festifal, bringing the crunchies
                      Peanut Burgers- Original flavour to you. Don't miss out
                    </h6>
                  </div>
                </div>
              </div>
              <div className='w3-third  n_sec4_inner_container  mb-4'>
                <div className='w3-card-4 n_sec4card_container n_sec4_card_container3'>
                  <div className='w3-container n_sec4_img_container3'>
                    <img src={img3} alt='customer1' />
                  </div>
                  <div className='w3-container n_sec4_headers'>
                    <h4>Spring Market</h4>
                    <h6>Location: Country Club</h6>
                    <h6>
                      Come and find us at the Weekend Market. Sample our
                      delicious snacks and take home your favorites
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='n_sec4__caroursel'>
              {' '}
              <div className='w3-third n_sec4_inner_container mb-4'>
                <div className='w3-card-4 n_sec4_card_container n_sec4_card_container2'>
                  <div className='w3-container n_sec4_img_container2 text-center '>
                    <img src={img3} alt='customer1' />
                  </div>
                  <div className='w3-container n_sec4_headers'>
                    <h4>KasiVibe Festival (Event poster)</h4>
                    <h6>Location: Sam Nujoma Stadium</h6>
                    <h6>
                      we'll be at the KasiVibe Festifal, bringing the crunchies
                      Peanut Burgers- Original flavour to you. Don't miss out
                    </h6>
                  </div>
                </div>
              </div>
              <div className='w3-third  n_sec4_inner_container  mb-4'>
                <div className='w3-card-4 n_sec4card_container n_sec4_card_container3'>
                  <div className='w3-container n_sec4_img_container3'>
                    <img src={img2} alt='customer1' />
                  </div>
                  <div className='w3-container n_sec4_headers'>
                    <h4>Spring Market</h4>
                    <h6>Location: Country Club</h6>
                    <h6>
                      Come and find us at the Weekend Market. Sample our
                      delicious snacks and take home your favorites
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* mobile  */}
      <div className='sec3_mobile'>
        <div className='section_5__header'>
          <h2 className='section5-headerh'>
            <span>Follow Our Events</span>
          </h2>
          <p className='section5-headerp'>
            Stay updated with our latest appearances! Join us at these upcoming
            events:
          </p>
        </div>

        <div className='w3-row w3-margin-top d-flex justify-content-center section5_Out_container_mobile'>
          <Carousel>
            <Carousel.Item>
              <div className='w3-third sec5_inner_container mb-4'>
                <div className='w3-card-4 sec5_card_container sec5_card_container2'>
                  <div className='w3-container sec5_img_container2 text-center '>
                    <img
                      src={img6}
                      alt='customer1'
                      style={{ height: '150px' }}
                    />
                  </div>
                  <div className='w3-container sec5_headers'>
                    <h6>KasiVibe Festival (Event poster)</h6>
                    <h4>Location: Sam Nujoma Stadium</h4>

                    <h4>
                      we'll be at the KasiVibe Festifal, bringing the crunchies
                      Peanut Burgers- Original flavour to you. Don't miss out
                    </h4>
                  </div>
                  <div className='w3-container w3-margin-bottom '>
                    <button className='w3-button w3-circle  w3-right sec5_link_pointer'>
                      {'>'}
                    </button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='w3-third  sec5_inner_container  mb-4'>
                <div className='w3-card-4 sec5_card_container sec5_card_container3'>
                  <div className='w3-container sec5_img_container3 text-center'>
                    <img
                      src={img7}
                      alt='customer1'
                      style={{ height: '150px' }}
                    />
                  </div>
                  <div className='w3-container sec5_headers'>
                    <h6>Spring Market</h6>
                    <h4>Location: Country Club</h4>

                    <h4>
                      Come and find us at the Weekend Market. Sample our
                      delicious snacks and take home your favorites
                    </h4>
                  </div>
                  <div className='w3-container w3-margin-bottom '>
                    <button className='w3-button w3-circle w3-right sec5_link_pointer'>
                      {'>'}
                    </button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/* section 4 Ends */}
      {/* Section 5  starts*/}
      <div className='n_sec5'>
        <div className='n_sec5_header'>
          <h1>Event Archive</h1>
        </div>
        <Carousel controls={false} className='n_sec5_caroursel'>
          <Carousel.Item>
            <div className='news_gallery'>
              <div className='news__gallery_item--1'>
                <img className='news_gallery--img' src={img4} alt='ya' />
              </div>
              <div className='news__gallery_item--2'>
                <img className='news_gallery--img' src={img6} alt='ya' />
              </div>
              <div className='news__gallery_item--3'>
                <h2>Academia school visit</h2>
                <h3>Location: Academia Secondary school</h3>
                <h3>
                  We'll be at the KasiVibe Festival, bringing the crunchiest
                  Peanut Burgers - Original Flavor to you. Don't miss out!
                </h3>
              </div>
              <div className='news__gallery_item--4'>
                <img className='news_gallery--img' src={img9} alt='ya' />
              </div>
              <div className='news__gallery_item--5 '>
                <img
                  className='news_gallery--img'
                  src={img5}
                  alt='First slide'
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='news_gallery'>
              <div className='news__gallery_item--1'>
                <img className='news_gallery--img' src={img4} alt='ya' />
              </div>
              <div className='news__gallery_item--2'>
                <img className='news_gallery--img' src={img6} alt='ya' />
              </div>
              <div className='news__gallery_item--3'>
                <h2>Academia school visit</h2>
                <h3>Location: Academia Secondary school</h3>
                <h3>
                  We'll be at the KasiVibe Festival, bringing the crunchiest
                  Peanut Burgers - Original Flavor to you. Don't miss out!
                </h3>
              </div>
              <div className='news__gallery_item--4'>
                <img className='news_gallery--img' src={img9} alt='ya' />
              </div>
              <div className='news__gallery_item--5'>
                <img
                  className='news_gallery--img'
                  src={img5}
                  alt='First slide'
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='news_gallery'>
              <div className='news__gallery_item--1'>
                <img className='news_gallery--img' src={img4} alt='ya' />
              </div>
              <div className='news__gallery_item--2'>
                <img className='news_gallery--img' src={img6} alt='ya' />
              </div>
              <div className='news__gallery_item--3'>
                <h2>Academia school visit</h2>
                <h3>Location: Academia Secondary school</h3>
                <h3>
                  We'll be at the KasiVibe Festival, bringing the crunchiest
                  Peanut Burgers - Original Flavor to you. Don't miss out!
                </h3>
              </div>
              <div className='news__gallery_item--4'>
                <img className='news_gallery--img' src={img9} alt='ya' />
              </div>
              <div className='news__gallery_item--5'>
                <img
                  className='news_gallery--img'
                  src={img5}
                  alt='First slide'
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Section 5  Ends*/}
      {/* Section 6  starts*/}
      <div className='n_sec6'>
        <div className='n_sec6_container w3-center'>
          <h1>Join us!</h1>
          <h3>
            We love connecting with our community and introducing them to the
            goodness of Moonsnacks. Follow us on social media to stay informed
            about our next event.
          </h3>
        </div>
      </div>
      {/* Section 6  Endss*/}
      {/* Section 7  starts*/}
      <div className='n_sec7'>
        <div className='n_sec7_container'>
          <div className='n_sec7_div1'>
            <img
              src={img9}
              alt='q'
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className='n_sec7_div2'>
            <h4>
              Want Moonsnacks at Your Event? Planning an event and want
              Moonsnacks to be part of the excitement? Contact us(link to
              contact us page) to discuss collaborations and partnerships.
            </h4>
          </div>
        </div>
      </div>
      {/* Section 7  Ends*/}
    </>
  );
}

export default News;
