// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import './Home.css';
import img1 from '../../Images/4s.webp';
import img2 from '../../Images/1.png';
import img3 from '../../Images/honeyroastedpeanuts17-720x540.jpg';
import img4 from '../../Images/2.jpg';
import img5 from '../../Images/3.jpeg';
import img6 from '../../Images/img8.png';
import img7 from '../../Images/img7.png';
import img8 from '../../Images/nuts.jpg';
import {
  CardBodyContainer,
  CardButton,
  CardDescription,
  CardImageContainer,
  ImageOverlayContainer,
  OverlayText,
  TestimonialsWrapper,
} from '../../Styles';
import { blogs, testimonials } from '../../../data';
import slugify from 'slugify';
import useDataFetching from '../../useDataFetching';

function Home() {
  const [index, setIndex] = useState(0);
  // const [posts, setPosts] = useState([]);

  // const fetchPosts = useCallback(() => {
  //   setPosts(null);
  //   for (let i = 0; i < 3; i++) {
  //     setPosts([...posts, blogs[i]]);
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchPosts();
  // }, [fetchPosts]);
  // const [posts, setPosts] = useState([]);

  // const fetchPosts = useCallback(() => {
  //   let tempPosts = [];
  //   for (let i = 0; i < 3; i++) {
  //     tempPosts.push(blogs[i]);
  //   }
  //   setPosts(tempPosts);
  // }, [blogs]);

  // useEffect(() => {
  //   fetchPosts();
  // }, [fetchPosts, posts]);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
  };
  const fetchBlogs = async () => {
    return new Promise((resolve) => {
      // Simulating an API call with a delay
      setTimeout(() => {
        let tempPosts = [];
        for (let i = 0; i < 3; i++) {
          tempPosts.push(blogs[i]);
        }
        resolve(tempPosts);
      }, 1000); // Adjust the delay as needed
    });
  };
  const fetchTestimonials = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // After we have a testimonials array in our data
        const tempTestimonials = testimonials.slice(0, 3);
        resolve(tempTestimonials);
      }, 1000); //  delay
    });
  };

  const fetchedTestimonials = useDataFetching(fetchTestimonials);

  const fetchedBlogs = useDataFetching(fetchBlogs);
  return (
    <>
      <div className='sec1'>
        <Carousel indicators={false}>
          <Carousel.Item>
            <img
              style={{ height: '100vh', objectFit: 'cover' }}
              className='d-block w-100'
              src={img1}
              alt='First slide'
            />
            <div className='image-overlay'></div>
            <Carousel.Caption className='h4_Home' style={{ textAlign: 'left' }}>
              <h5>Satisfy Your Cravings Today</h5>
              <p>
                Our Peanut Burgers- Original Flavour are meticulously crafted to
                deliver a satisfying crunch and a burst of irresistible flavor
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '100vh', objectFit: 'cover' }}
              className='d-block w-100'
              src={img2}
              alt='Second slide'
            />
            <div className='image-overlay'></div>
            <Carousel.Caption className='h4_Home' style={{ textAlign: 'left' }}>
              <h5>
                {' '}
                Satisfy Your <br></br> Cravings Today
              </h5>
              <p>
                Our Peanut Burgers- Original Flavour are meticulously crafted to
                deliver a satisfying crunch and a burst of irresistible flavor
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '100vh', objectFit: 'cover' }}
              className='d-block w-100'
              src={img3}
              alt='Third slide'
            />
            <div className='image-overlay'></div>
            <Carousel.Caption className='h4_Home' style={{ textAlign: 'left' }}>
              <h5>
                {' '}
                Satisfy Your <br></br> Cravings Today
              </h5>
              <p>
                Our Peanut Burgers- Original Flavour are meticulously crafted to
                deliver a satisfying crunch and a burst of irresistible flavor
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '100vh', objectFit: 'cover' }}
              className='d-block w-100'
              src={img4}
              alt='Third slide'
            />
            <div className='image-overlay'></div>
            <Carousel.Caption className='h4_Home' style={{ textAlign: 'left' }}>
              <h5>
                {' '}
                Satisfy Your <br></br> Cravings Today
              </h5>
              <p>
                Our Peanut Burgers- Original Flavour are meticulously crafted to
                deliver a satisfying crunch and a burst of irresistible flavor
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '100vh', objectFit: 'cover' }}
              className='d-block w-100'
              src={img5}
              alt='Third slide'
            />
            <div className='image-overlay'></div>
            <Carousel.Caption className='h4_Home' style={{ textAlign: 'left' }}>
              <h5>
                {' '}
                Satisfy Your <br></br> Cravings Today
              </h5>
              <p>
                Our Peanut Burgers- Original Flavour are meticulously crafted to
                deliver a satisfying crunch and a burst of irresistible flavor
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* section two */}
      <div className='w3-animate-zoom home_sec2'>
        <div className='w3-mobile sec2_header'>
          <h2>Let's explore why this nutty treats should be your top choice</h2>
          <p>
            When it comes to satisfying your snack cravings, peanuts take center
            stage as a delicious and nutritious option.
          </p>
        </div>
        <div className='home_gallery'>
          <div className='home__gallery_item--1'>
            <img
              className='home_gallery--img'
              style={{ borderRadius: '20px 0 0 20px' }}
              src={img8}
              alt='First slide'
            />
          </div>
          <div className='home__gallery_item--2'>
            <img className='home_gallery--img' src={img2} alt='First slide' />
          </div>
          <div className='home__gallery_item--3'>
            <img
              className='home_gallery--img'
              style={{ borderRadius: '0 20px 0 0' }}
              src={img4}
              alt='First slide'
            />
          </div>
          <div className='home__gallery_item--4'>
            <img className='home_gallery--img' src={img3} alt='First slide' />
          </div>
          <div className='home__gallery_item--5'>
            <img
              className='home_gallery--img'
              src={img5}
              style={{ borderRadius: '0 0 20px 0' }}
              alt='First slide'
            />
          </div>
        </div>
      </div>

      {/* section 3 */}
      <section>
        <div className='sec3_container'>
          <h3 className='section-header'>TESTIMONIALS.</h3>
          <h2 className='section3-headerp'>
            <span>What our Customers Say...</span>
          </h2>
          <div className='testimonials'>
            {fetchedTestimonials.length > 0 && (
              <Carousel
                activeIndex={index}
                onSelect={(selectedIndex) => setIndex(selectedIndex)}
                controls={false}
                wrap={true}>
                {fetchedTestimonials.map((v) => (
                  <Carousel.Item key={v.id}>
                    <div className='single-item'>
                      <div className='row'>
                        <div className='col-md-5'>
                          <div className='lines'>
                            <div className='line1'></div>
                            <div className='line2'></div>
                          </div>
                          <div className='profile'>
                            <div className='image_area'>
                              <img src={v.img} alt='customer1' />
                            </div>
                          </div>
                          <div className='bio'>
                            <h2>{v.user}</h2>
                            <h4>{v.profesion}</h4>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <TestimonialsWrapper>
                            <p>
                              <span>
                                <FaQuoteLeft />
                              </span>
                              {v.comment}
                              <span className='FaQuoteRight'>
                                <FaQuoteRight />
                              </span>
                            </p>
                          </TestimonialsWrapper>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}

            <div className='w3-container w3-margin-top w3-center'>
              <button
                className='w3-button w3-circle w3-gray w3-center'
                style={{ marginRight: '10px' }}
                onClick={handlePrev}>
                {'<'}
              </button>
              <button
                className='w3-button w3-circle w3-gray w3-center'
                onClick={handleNext}>
                {'>'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <div className='sec4'>
        <h2 className='section4-headerp'>
          <span>Latest From Our Blog</span>
        </h2>
        {/* bigger screen view */}
        <div className='w3-margin-top section4_Out_container'>
          {fetchedBlogs.length > 0 && (
            <>
              {' '}
              {fetchedBlogs.map((v) => (
                <CardBodyContainer
                  key={v.id}
                  style={{ backgroundColor: v.background }}>
                  <CardImageContainer>
                    <img
                      src={v.img}
                      alt='Card_Image'
                      style={{
                        height: '170px',
                        width: '100%',
                        objectFit: 'cover',
                        borderRadius: '20px 20px 0 0',
                      }}
                    />
                    <ImageOverlayContainer>
                      <OverlayText>
                        <p>{v.overlayText}</p>
                      </OverlayText>
                    </ImageOverlayContainer>
                  </CardImageContainer>
                  <CardDescription>
                    <h2>{v.shortDiscription}</h2>
                    <Link
                      to={`/blog/${v.id}/${slugify(v.title, {
                        replacement: '-',
                        remove: undefined,
                        lower: true,
                        strict: false,
                        trim: true,
                      })}`}>
                      <CardButton>{'>'}</CardButton>
                    </Link>
                  </CardDescription>
                </CardBodyContainer>
              ))}
            </>
          )}
        </div>
        {/* mobile view */}
        <div className='slider_sec4_inner_container_mobile'>
          {fetchedBlogs.length > 0 && (
            <Carousel
              activeIndex={index}
              onSelect={(selectedIndex) => setIndex(selectedIndex)}
              wrap={true}>
              {fetchedBlogs.map((v) => (
                <Carousel.Item key={v.id}>
                  <CardBodyContainer style={{ backgroundColor: v.background }}>
                    <CardImageContainer>
                      <img
                        src={v.img}
                        alt='Card_Image'
                        style={{
                          height: '170px',
                          width: '100%',
                          objectFit: 'cover',
                          borderRadius: '20px 20px 0 0',
                        }}
                      />
                      <ImageOverlayContainer>
                        <OverlayText>
                          <p>{v.overlayText}</p>
                        </OverlayText>
                      </ImageOverlayContainer>
                    </CardImageContainer>
                    <CardDescription>
                      <h2>{v.shortDiscription}</h2>
                      <Link
                        to={`/blog/${v.id}/${slugify(v.title, {
                          replacement: '-',
                          remove: undefined,
                          lower: true,
                          strict: false,
                          trim: true,
                        })}`}>
                        <CardButton>{'>'}</CardButton>
                      </Link>
                    </CardDescription>
                  </CardBodyContainer>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
      </div>

      {/* section 5 */}
      <div className='sec5'>
        <h2 className='section5-headerh'>
          <span>Follow Our Events</span>
        </h2>
        <p className='section5-headerp'>
          Stay updated with our latest appearances! Join us at these upcoming
          events:
        </p>
        <div className='w3-row w3-margin-top d-flex justify-content-center section5_Out_container'>
          <div className='w3-third w3-mobile w3-animate-right sec5_inner_container mb-4'>
            <div className='w3-card-4 sec5_card_container sec5_card_container2'>
              <div className='w3-container sec5_img_container2 text-center '>
                <img src={img6} alt='customer1' />
              </div>
              <div className='w3-container sec5_headers'>
                <h6>KasiVibe Festival </h6>
                <h5>Location: Sam Nujoma Stadium</h5>
                <br></br>
                <h5>
                  we'll be at the KasiVibe Festifal, bringing the crunchies
                  Peanut Burgers- Original flavour to you. Don't miss out
                </h5>
              </div>
              <div className='w3-container w3-margin-bottom '>
                <button className='w3-button w3-circle  w3-right sec5_link_pointer'>
                  {'>'}
                </button>
              </div>
            </div>
          </div>
          <div className='w3-third w3-mobile w3-animate-left sec5_inner_container  mb-4'>
            <div className='w3-card-4 sec5_card_container sec5_card_container3'>
              <div className='w3-container sec5_img_container3 text-center'>
                <img src={img7} alt='customer1' />
              </div>
              <div className='w3-container sec5_headers'>
                <h6>Spring Market</h6>
                <h5>Location: Country Club</h5>
                <br></br>
                <h5>
                  Come and find us at the Weekend Market. Sample our delicious
                  snacks and take home your favorites.
                </h5>
              </div>
              <div className='w3-container '>
                <button className='w3-button w3-circle w3-right sec5_link_pointer'>
                  {'>'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile  */}
      <div className='sec5_mobile'>
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
                      style={{ height: '300px' }}
                    />
                  </div>
                  <div className='w3-container sec5_headers'>
                    <h6>KasiVibe Festival (Event poster)</h6>
                    <h4>Location: Sam Nujoma Stadium</h4>
                    <br></br>
                    <br></br>
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
                      style={{ height: '300px' }}
                    />
                  </div>
                  <div className='w3-container sec5_headers'>
                    <h6>Spring Market</h6>
                    <h4>Location: Country Club</h4>
                    <br></br> <br></br>
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
    </>
  );
}

export default Home;
