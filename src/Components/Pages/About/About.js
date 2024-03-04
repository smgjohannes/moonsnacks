import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneSquare,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquareXTwitter,
  faInstagramSquare,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FaQuoteLeft } from 'react-icons/fa';
import img1 from '../../Images/2.jpg';
import img2 from '../../Images/5.jpg';
import img3 from '../../Images/ourteam1.png';
import img4 from '../../Images/ourteam2.jpg';
import img5 from '../../Images/ourteam3.png';
import img6 from '../../Images/ourteam4.png';
import img7 from '../../Images/nuts.jpg';
import img8 from '../../Images/ellipse.png';
import img9 from '../../Images/mission.png';
import img10 from '../../Images/vision.png';
import img11 from '../../Images/do.png';
import img01 from '../../Images/colab.png';
import img02 from '../../Images/colab1.png';
import img03 from '../../Images/colab2.png';
import img04 from '../../Images/achive.png';
import img05 from '../../Images/achive1.png';
import img06 from '../../Images/achive2.png';
import img07 from '../../Images/nuts1.png';

import './About.css';

function About() {
  return (
    <>
      {/* section1 starts */}
      <div className='about_sec1'>
        <div className='overlay'></div>
        <div className='about_img_container'>
          <img
            src={img1}
            alt='background_image'
            style={{
              width: '100%',
              height: '50vh',
              objectFit: 'cover',
              top: '100px',
            }}
          />
        </div>
        <div className='about_section2__item--1'>
          <h4 className='w3-center about_sec2_h4'>About Us</h4>
          <h9 className='w3-center'>Moonsnacks</h9>
          <span>
            <FaQuoteLeft />
          </span>
          <h6>
            Our Peanut Burgers - Original Flavor are meticulously crafted to
            deliver a satisfying crunch and a burst of irresistible flavor.
          </h6>
        </div>

        <div className='about_section2__item--3'></div>
        <div className='about_section2__item--4'></div>
      </div>

      {/* section2 starts */}
      {/* <div className='about_sec2'>
        <div className='about_inner_div'>
          <div className='about_card'>
            <h4 className='w3-center about_sec2_h4'>About Us</h4>
            <h9 className='w3-center'>Moonsnacks</h9>
          </div>
          <div className='w3-center about_h6'>
            <span>
              <FaQuoteLeft />
            </span>
            <h6>
              Our Peanut Burgers - Original Flavor are meticulously crafted to
              deliver a satisfying crunch and a burst of irresistible flavor.
            </h6>
          </div>
          <div className='about_white'></div>
          <div className='about_white2'></div>
        </div>
        <div className='about_alignment'></div>
      </div> */}

      <div className='about_sec3'></div>
      {/* section2 ends */}

      {/* section 3 starts */}
      <div className='about_sec3_sec'>
        <div className='about_sec3_container'>
          <div className='about_sec3_header'>
            <h2>Our Story</h2>
          </div>
          {/* BigScreen */}

          <div className='about_sec3_div_container'>
            <div className='about_div1'>
              <img
                src={img2}
                alt='q'
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '15px',
                }}
              />
            </div>
            <div className='about_div2'>
              <h2>
                We provide healthy<br></br>snacks for your family.
              </h2>
              <h3>
                Moonsnacks Investment (Pty) Ltd is a proudly Namibian owned and
                operated food processing company that embarked on its journey in
                late 2021, officially launching its operations in mid-2022.
              </h3>
              <h3>
                The company's inception was driven by a vision to transform
                Namibia's value addition landscape. We recognized the immense
                potential within the Namibian agricultural industry but
                identified a critical gap in value addition. This gap was our
                inspiration to create snack products that not only delight
                consumers but also empower local farmers and open doors to
                formal and international markets.
              </h3>
              <div className='w3-card-4 about_busines_card'>
                <h2>Business Enquires</h2>
                <div className='about_card_contacts'>
                  <div className='about_card1_phone'>
                    <a href='#home'>
                      <FontAwesomeIcon
                        icon={faPhoneSquare}
                        style={{ color: '#FFFFFF', fontSize: '40px' }}
                      />
                    </a>
                    <p>+246 8175 65534</p>
                  </div>
                  <div className='about_card2_email'>
                    <a href='#home'>
                      <FontAwesomeIcon
                        icon={faEnvelopeSquare}
                        style={{ color: '#FFFFFF', fontSize: '40px' }}
                      />
                    </a>
                    <p>Bruno.ngh@moonsnacksna.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* BigScreen ends */}
          {/* Mobile */}
          <div className='about_sec3_div_containerMobile'>
            <div className='about_div--1'>
              <h2>We provide healthy snacks for your family.</h2>
              <h3>
                Moonsnacks Investment (Pty) Ltd is a proudly Namibian owned and
                operated food processing company that embarked on its journey in
                late 2021, officially launching its operations in mid-2022.
              </h3>
            </div>
            <div className='about_div1'>
              <img
                src={img2}
                alt='q'
                style={{
                  height: '400px',
                  width: '550px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                }}
              />
            </div>
            <div className='about_div2'>
              <h3>
                The company's inception was driven by a vision to transform
                Namibia's value addition landscape. We recognized the immense
                potential within the Namibian agricultural industry but
                identified a critical gap in value addition. This gap was our
                inspiration to create snack products that not only delight
                consumers but also empower local farmers and open doors to
                formal and international markets.
              </h3>
              <div className='w3-card-4 about_busines_card'>
                <h2>Business Enquires</h2>
                <div className='about_card_contacts'>
                  <div className='about_card1_phone'>
                    <a href='#home'>
                      <FontAwesomeIcon
                        icon={faPhoneSquare}
                        style={{ color: '#FFFFFF', fontSize: '40px' }}
                      />
                    </a>
                    <p>+246 8175 65534</p>
                  </div>
                  <div className='about_card2_email'>
                    <a href='#home'>
                      <FontAwesomeIcon
                        icon={faEnvelopeSquare}
                        style={{ color: '#FFFFFF', fontSize: '40px' }}
                      />
                    </a>
                    <p>Bruno.ngh@moonsnacksna.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 Ends */}
      {/* section 4 starts */}
      <div className='about_sec4'>
        <div className='about_sec4_header'>
          <h2>Our Team</h2>
        </div>
        <div className='about_container'>
          <div className='ourteam1'>
            <img
              src={img3}
              alt=''
              style={{
                height: '400px',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
              }}
            />
            <div className='ourteam_names'>
              <h2>Charlotte Levi</h2>
              <h3>Design, Australia</h3>
              <div className='ourteam_names_socials'>
                <a href='urr' class='facebook'>
                  {' '}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: '#1877f2', fontSize: '30px' }}
                  />
                </a>
                <a href='rrr' class='instagram'>
                  {' '}
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    style={{ color: '#E1306C', fontSize: '30px' }}
                  />
                </a>
                <a href='ee' class='linkedin'>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: '#0077B5', fontSize: '30px' }}
                  />
                </a>
                <a href='ee' class='twitter'>
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    style={{ color: '#000000', fontSize: '30px' }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='ourteam2'>
            <img
              src={img4}
              alt=''
              style={{
                height: '400px',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
                alignItems: 'center',
              }}
            />
            <div className='ourteam_names'>
              <h2>Charlotte Levi</h2>
              <h3>Design, Australia</h3>
              <div className='ourteam_names_socials'>
                <a href='urr' class='facebook'>
                  {' '}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: '#1877f2', fontSize: '30px' }}
                  />
                </a>
                <a href='rrr' class='instagram'>
                  {' '}
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    style={{ color: '#E1306C', fontSize: '30px' }}
                  />
                </a>
                <a href='ee' class='linkedin'>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: '#0077B5', fontSize: '30px' }}
                  />
                </a>
                <a href='ee' class='twitter'>
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    style={{ color: '#000000', fontSize: '30px' }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='ourteam3'>
            <img
              src={img5}
              alt=''
              style={{
                height: '400px',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
              }}
            />
            <div className='ourteam_names'>
              <h2>Charlotte Levi</h2>
              <h3>Design, Australia</h3>
              <div className='ourteam_names_socials'>
                <a href='urr' class='facebook'>
                  {' '}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: '#1877f2', fontSize: '30px' }}
                  />
                </a>
                <a href='rrr' class='instagram'>
                  {' '}
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    style={{ color: '#E1306C', fontSize: '30px' }}
                  />
                </a>
                <a href='ee' class='linkedin'>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: '#0077B5', fontSize: '30px' }}
                  />
                </a>
                <a href='ee' class='twitter'>
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    style={{ color: '#000000', fontSize: '30px' }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='ourteam4'>
            <img
              src={img6}
              alt=''
              style={{
                height: '400px',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '15px',
              }}
            />
            <div className='ourteam_names'>
              <h2>Charlotte Levi</h2>
              <h3>Design, Australia</h3>
              <div className='ourteam_names_socials'>
                <a href='urr' class='facebook'>
                  {' '}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: '#1877f2', fontSize: '30px' }}
                  />
                </a>
                <a href='rrr' class='instagram'>
                  {' '}
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    style={{ color: '#E1306C', fontSize: '30px' }}
                  />
                </a>
                <a href='ee' class='linkedin'>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: '#0077B5', fontSize: '30px' }}
                  />
                </a>
                <a href='ee' class='twitter'>
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    style={{ color: '#000000', fontSize: '30px' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='about_container__mobile'>
          <div className='about_mobile__container'>
            <div className='ourteam1'>
              <img
                src={img3}
                alt=''
                style={{
                  height: '200px',
                  width: '150px',
                  objectFit: 'cover',
                  borderRadius: '30px',
                }}
              />
              <div className='ourteam_names'>
                <h2>Charlotte Levi</h2>
                <h3>Design, Australia</h3>
                <div className='ourteam_names_socials'>
                  <a href='urr' class='facebook'>
                    {' '}
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: '#1877f2', fontSize: '30px' }}
                    />
                  </a>
                  <a href='rrr' class='instagram'>
                    {' '}
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      style={{ color: '#E1306C', fontSize: '30px' }}
                    />
                  </a>
                  <a href='ee' class='linkedin'>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: '#0077B5', fontSize: '30px' }}
                    />
                  </a>
                  <a href='ee' class='twitter'>
                    <FontAwesomeIcon
                      icon={faSquareXTwitter}
                      style={{ color: '#000000', fontSize: '30px' }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='ourteam2'>
              <img
                src={img4}
                alt=''
                style={{
                  height: '200px',
                  width: '150px',
                  objectFit: 'cover',
                  borderRadius: '30px',
                  alignItems: 'center',
                }}
              />
              <div className='ourteam_names'>
                <h2>Charlotte Levi</h2>
                <h3>Design, Australia</h3>
                <div className='ourteam_names_socials'>
                  <a href='urr' class='facebook'>
                    {' '}
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: '#1877f2', fontSize: '30px' }}
                    />
                  </a>
                  <a href='rrr' class='instagram'>
                    {' '}
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      style={{ color: '#E1306C', fontSize: '30px' }}
                    />
                  </a>
                  <a href='ee' class='linkedin'>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: '#0077B5', fontSize: '30px' }}
                    />
                  </a>
                  <a href='ee' class='twitter'>
                    <FontAwesomeIcon
                      icon={faSquareXTwitter}
                      style={{ color: '#000000', fontSize: '30px' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='about_mobile__container'>
            <div className='ourteam3'>
              <img
                src={img5}
                alt=''
                style={{
                  height: '200px',
                  width: '150px',
                  objectFit: 'cover',
                  borderRadius: '30px',
                }}
              />
              <div className='ourteam_names'>
                <h2>Charlotte Levi</h2>
                <h3>Design, Australia</h3>
                <div className='ourteam_names_socials'>
                  <a href='urr' class='facebook'>
                    {' '}
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: '#1877f2', fontSize: '30px' }}
                    />
                  </a>
                  <a href='rrr' class='instagram'>
                    {' '}
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      style={{ color: '#E1306C', fontSize: '30px' }}
                    />
                  </a>
                  <a href='ee' class='linkedin'>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: '#0077B5', fontSize: '30px' }}
                    />
                  </a>
                  <a href='ee' class='twitter'>
                    <FontAwesomeIcon
                      icon={faSquareXTwitter}
                      style={{ color: '#000000', fontSize: '30px' }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='ourteam4'>
              <img
                src={img6}
                alt=''
                style={{
                  height: '200px',
                  width: '150px',
                  objectFit: 'cover',
                  borderRadius: '30px',
                }}
              />
              <div className='ourteam_names'>
                <h2>Charlotte Levi</h2>
                <h3>Design, Australia</h3>
                <div className='ourteam_names_socials'>
                  <a href='urr' class='facebook'>
                    {' '}
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: '#1877f2', fontSize: '30px' }}
                    />
                  </a>
                  <a href='rrr' class='instagram'>
                    {' '}
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      style={{ color: '#E1306C', fontSize: '30px' }}
                    />
                  </a>
                  <a href='ee' class='linkedin'>
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      style={{ color: '#0077B5', fontSize: '30px' }}
                    />
                  </a>
                  <a href='ee' class='twitter'>
                    <FontAwesomeIcon
                      icon={faSquareXTwitter}
                      style={{ color: '#000000', fontSize: '30px' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 ends */}
      {/* section 5 starts */}
      <div className='about_sec5_sec'>
        <div className='about_sec5_container'>
          <div className='about_sec5_header'>
            <h2>Why Choose us?</h2>
            <h4>We Believe in supporting small-scale farmers in Namibia.</h4>
          </div>
          <div className='about_sec5_div_container'>
            <div className='sec5_about_div1'>
              <div className='about_div1_insider_container'>
                <h2>
                  At Moonsnacks, we are passionate about creating delicious and
                  nutritious snack products using locally sourced ingredients.
                </h2>
                <div className='about_div1_insider'>
                  <img
                    src={img8}
                    alt=' a'
                    style={{ height: '20px', width: '20px' }}
                  />
                  <h2>100% Locally sourced</h2>
                </div>
                <h3>
                  We believe that by supporting small-scale farmers in Kunene,
                  Zambezi, and Kavango West, we can add value to the
                  agricultural sector, empower local communities, and contribute
                  to food security in Namibia
                </h3>
              </div>
              <div className='about_div1_insider_container'>
                <div className='about_div1_insider1'>
                  <img
                    src={img8}
                    alt=' a'
                    style={{ height: '20px', width: '20px' }}
                  />
                  <h2>Organic</h2>
                </div>
                <h3>
                  Our products are proudly free from preservatives and
                  artificial colors. Our flagship product, the peanut burger,
                  exemplifies this commitment
                </h3>
              </div>
              <div className='about_div1_insider_container'>
                <div className='about_div1_insider2'>
                  <img
                    src={img8}
                    alt=' a'
                    style={{ height: '20px', width: '20px' }}
                  />
                  <h2>Nutritious</h2>
                </div>
                <h3>
                  They not only serve as a delightful treat but also provide an
                  excellent source of protein. We are dedicated to producing
                  high-quality snacks that are not just tasty but also healthy
                  and nourishing.
                </h3>
              </div>
            </div>
            <div className='sec5_about_div2'>
              <img
                src={img7}
                alt='q'
                style={{
                  height: '500px',
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '15px',
                }}
              />
            </div>
          </div>
          <div className='about_sec5_div_container_mobile'>
            <div className='sec5_about_div1'>
              <div className='about_div1_insider_container'>
                <div className='about_div1_insider'>
                  <img
                    src={img8}
                    alt=' a'
                    style={{ height: '20px', width: '20px' }}
                  />
                  <h2>100% Locally sourced</h2>
                </div>
                <h3>
                  We believe that by supporting small-scale farmers in Kunene,
                  Zambezi, and Kavango West, we can add value to the
                  agricultural sector, empower local communities, and contribute
                  to food security in Namibia
                </h3>
              </div>
              <div className='about_div1_insider_container'>
                <div className='about_div1_insider1'>
                  <img
                    src={img8}
                    alt=' a'
                    style={{ height: '20px', width: '20px' }}
                  />
                  <h2>Organic</h2>
                </div>
                <h3>
                  Our products are proudly free from preservatives and
                  artificial colors. Our flagship product, the peanut burger,
                  exemplifies this commitment
                </h3>
              </div>
              <div className='about_div1_insider_container'>
                <div className='about_div1_insider2'>
                  <img
                    src={img8}
                    alt=' a'
                    style={{ height: '20px', width: '20px' }}
                  />
                  <h2>Nutritious</h2>
                </div>
                <h3>
                  They not only serve as a delightful treat but also provide an
                  excellent source of protein. We are dedicated to producing
                  high-quality snacks that are not just tasty but also healthy
                  and nourishing.
                </h3>
              </div>
            </div>
            <div className='sec5_about__div2'>
              <h2>
                At Moonsnacks, we are passionate about creating delicious and
                nutritious snack products using locally sourced ingredients.
              </h2>
              <img
                src={img07}
                alt='q'
                style={{
                  height: '200px',
                  width: '200px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section 5 ends */}
      {/* section 6 starts */}
      <div className='about-sec6'>
        <div className='w3-card-4 about_sec6__card1'>
          <div className='about_sec6__card1--1'>
            <div className='w3-center card1_item_1'>
              <h2>Mission</h2>
            </div>
            <hr></hr>
            <div className='w3-center card1_item_2'>
              <img src={img9} alt='s' style={{ height: '100px' }} />
            </div>
          </div>
          <div className='about_sec6__card1--2'>
            <ul>
              <li>
                To create proudly Namibian-sourced snack products that enrich
                our consumers' lives.
              </li>
            </ul>
            <ul>
              <li>
                Elevate our farmers' livelihoods, and open doors to formal and
                global markets.
              </li>
            </ul>
            <ul>
              <li>
                We are excited to embark on this journey, starting with our
                beloved peanut burgers.
              </li>
            </ul>
          </div>
        </div>
        <div className='w3-card-4 about_sec6__card2'>
          <div className='about_sec6__card1--1'>
            <div className='w3-center card1_item_1'>
              <h2>Vision</h2>
            </div>
            <hr className='w3-center'></hr>
            <div className='w3-center card1_item_2'>
              <img src={img10} alt='s' style={{ height: '100px' }} />
            </div>
          </div>
          <div className='about_sec6__card1--2'>
            <ul>
              <li>
                Become Namibia's leading snack food company, known for its
                dedication to using locally sourced ingredients and agricultural
                products
              </li>
            </ul>
            <ul>
              <li>
                Create an innovative, high-quality snack products enjoyed
                globally.
              </li>
            </ul>
            <ul>
              <li>
                Make a positive impact on small-scale farmers and the
                communities we engage with.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Section 6 ends */}
      {/* Section 7 starts */}
      <div className='about_sec7'>
        <h2>Our Culture</h2>
        <div className='about_sec7_container'>
          <div className='about_sec7_div1'>
            <img
              src={img11}
              alt='w'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className='about_sec7_div2'>
            <h3>We do Creative Things for Success</h3>
            <p>
              Our culture revolves around innovation, quality, and community. We
              foster an environment where creativity thrives, and continuous
              improvement is celebrated. Every team member is encouraged to
              contribute ideas, helping us expand our product offerings and
              enhance our processes. .
            </p>
            <p>
              We invest in training and development to nurture talent and drive
              excellence in our roles. Collaboration and teamwork are at our
              core, and by working together, we achieve exceptional results that
              exceed our customers' expectations
            </p>
          </div>
        </div>
        <div className='about_sec7_container1'>
          <div className='about_sec7_div3'>
            <img
              src={img01}
              alt='s'
              style={{ width: '50px', height: '50px' }}
            />
            <h4>
              Collaboration and <br></br>Teamwork
            </h4>
          </div>
          <div className='about_sec7_div4'>
            <img
              src={img02}
              alt='s'
              style={{ width: '50px', height: '50px' }}
            />
            <h4>Culture of Innovation</h4>
          </div>
          <div className='about_sec7_div5'>
            <img
              src={img03}
              alt='s'
              style={{ width: '50px', height: '50px' }}
            />
            <h4>Employee Contributions</h4>
          </div>
        </div>
      </div>
      <div className='about_sec7__mobile'>
        <h2>Our Culture</h2>
        <div className='about_sec7_container'>
          <div className='about_sec7_div1'>
            <img
              src={img11}
              alt='w'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className='about_sec7_container1'>
            <div className='about_sec7__container--1'>
              <div className='about_sec7_div3'>
                <img
                  src={img01}
                  alt='s'
                  style={{ width: '50px', height: '50px' }}
                />
                <h4>
                  Collaboration and <br></br>Teamwork
                </h4>
              </div>
            </div>
            <div className='about_sec7__container--2'>
              <div className='about_sec7_div4'>
                <img
                  src={img02}
                  alt='s'
                  style={{ width: '50px', height: '50px' }}
                />
                <h4>Culture of Innovation</h4>
              </div>
              <div className='about_sec7_div5'>
                <img
                  src={img03}
                  alt='s'
                  style={{ width: '50px', height: '50px' }}
                />
                <h4>Employee Contributions</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='about_sec7_div2'>
          <h3>We do Creative Things for Success</h3>
          <p>
            Our culture revolves around innovation, quality, and community. We
            foster an environment where creativity thrives, and continuous
            improvement is celebrated. Every team member is encouraged to
            contribute ideas, helping us expand our product offerings and
            enhance our processes. .
          </p>
          <p>
            We invest in training and development to nurture talent and drive
            excellence in our roles. Collaboration and teamwork are at our core,
            and by working together, we achieve exceptional results that exceed
            our customers' expectations
          </p>
        </div>
      </div>
      {/* Section 7 Ends */}
      {/* Section 8 starts */}
      <div className='about_sec8'>
        <h2 className='about_sec8_header'>Our Achievements</h2>
        <div className='about_sec8_container'>
          <div className='w3-center about_sec8_card1'>
            <img src={img04} alt='r' style={{ height: '70px' }} />
            <h2>Grant Funding Success</h2>
            <h5>
              {' '}
              The company secured grant funding from prestigious competitions,
              including the Sanlam Startup Bridge and the Innovation Bridge in
              collaboration with the World Bank.
            </h5>
          </div>
          <div className='w3-center about_sec8_card2'>
            <img src={img05} alt='r' style={{ height: '70px' }} />
            <h2>Sustainability Excellence Award</h2>
            <h5>
              {' '}
              Moonsnacks received recognition as a sustainability excellence
              award winner at the NIPDB K2Gen event in 2022.
            </h5>
          </div>
          <div className='w3-center about_sec8_card3'>
            <img src={img06} alt='r' style={{ height: '70px' }} />
            <h2>Investment from Namibia Business Angel Network (NABAN)</h2>
            <h5>
              {' '}
              Moonsnacks attracted investment from the Namibia Business Angel
              Network (NABAN) during their initial funding round, indicating
              investor confidence in their pioneering endeavors.
            </h5>
          </div>
        </div>
      </div>
      {/* Section 8 Ends */}
    </>
  );
}

export default About;
