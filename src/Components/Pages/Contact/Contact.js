import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
  import { faSquareXTwitter, faInstagramSquare, faFacebook, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import img1 from '../../Images/1.png'
import img2 from '../../Images/5.jpg'
import './Contact.css'

function Contact() {
  return (
    <>
           {/* section1 starts */}
    <div className='contact_sec1'>
      <div className='contact_img_container'>
      <img src={img1} alt='background_image' style={{ width: '100%', height: '50vh', objectFit: 'cover',top:'100px' }} />
    </div>
    </div>
          {/* section1 ends */}

      {/* section2 starts */}
        <div className='contact_sec2'>
          <div className='contact_inner_div'>
            <div className='contact_card'>
              <h4 className='w3-center contact_sec2_h4'>Contact Us</h4>
            </div>

          </div>
          <div className='contact_col_container'>
              <div className='contact_wraper'>
              <div className='col_div1'>
                <div className='col_div1_img_container'>
                  <img src={img2} alt='img' style={{height:'300px'}} />
                </div>
              </div>
              <div className='col_div2'>
                <div className='col_div2_info_container'>
                  <h3>We'd Love to Hear From You</h3>
                  <p>At Moonsnacks, we value your feedback, questions, and inquiries. Please don't hesitate to get in touch with us using the following contact methods</p>
                  <div className='w3-card-4 ' id='div2_inside_card1'>
                    <div className='card1_email'>
                    <a href="#home">
                      <FontAwesomeIcon icon={faEnvelopeSquare} style={{ color: '#CEC3D2', fontSize: '50px' }} />
                      
                    </a>
                    </div>
                    <div className='card1_email_address'>
                    <h6>Email</h6>
                    <p>Brunno.ngh@moonsnacksna.com</p>

                    </div>

                  </div>
                  <div className='w3-card-4' id='div2_inside_card2'>
                    <div className='card2_phone'>
                    <a href="#home">
                      <FontAwesomeIcon icon={faPhoneSquare} style={{ color: '#CEC3D2', fontSize: '50px' }} />
                    </a>
                    </div>
                    <div className='card2_number'>
                    <h6>Contact Us</h6>
                    <p>+246 8175 65534</p>
                    </div>
                  </div>
                  </div> 
              </div>
            </div>
            </div>
        </div>
      {/* section2 ends */}

        {/* section3 starts */}
        <div className='contact_sec3'>
          <div className='contact_sec3_container'>
            <div className='sec3_header'>
              <h2>Send us a Message</h2>
              <p>Have a question or a message for us? Please fill out the contact form below, and we'll get back to you as soon as possible</p>
            </div>
            <div className="w3-container ">
              <form className="w3-container form_container">
                <div className="w3-row-padding">
                  <div className="w3-half">
                    <div className="w3-container">
                      <label className="w3-text-black sec3_texts">Full Name*</label>
                      <input className="w3-input w3-border w3-round-large" type="text" name="fullName" required />
                    </div>
                      
                    <div className="w3-container">
                      <label className="w3-text-black sec3_texts">Company*</label>
                      <input className="w3-input w3-border w3-round-large" type="text" name="company" />
                    </div>

                  </div>

                  <div className="w3-half">
                  <div className="w3-container">
                      <label className="w3-text-black sec3_texts">Your Email*</label>
                      <input className="w3-input w3-border w3-round-large" type="email" name="email" required />
                    </div>

                    <div className="w3-container">
                      <label className="w3-text-black sec3_texts">Subject*</label>
                      <input className="w3-input w3-border w3-round-large" type="text" name="subject" required />
                    </div>
                  </div>
              

                </div>
                <div className="w3-container w3-margin ">
                <label className="w3-text-black sec3_texts">Message*</label>
                  <textarea className="w3-input w3-border w3-round-large" name="message"row='4' required></textarea>
                </div>

                <div className="w3-container sec3_submit_button">
                  <button className="w3-button w3-text-white w3-round-large w3-margin-left" type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* section3 ends */}

        {/* section4 starts */}
        <div className='contact-sec4'>
          <div className='sec4_container'>
            <div className='sec4_contact_div1'>
              <div className='card_div1'>
                <h2>Media inquiries</h2>
                <p>For media inquiries, interviews, or press-related matters, please contact our media relations team at</p>
                <h7 className='card_div2_h7'>Bruno.ngh@moonsnacksna.com</h7>
              </div>  
            </div>
            <div className='sec4_contact_div2'>
              <div className='card_div2'>
                <h2>Customer Support</h2>
                <p>For any product-related queries or support requests, please email our customer support team at:</p>
                <h7 className='card_div2_h7'>Talk2us@moonsnacksna.com</h7>
              </div> 
            </div>
            <div className='sec4_contact_div3'>
              <div className='card_div3'>
                <h2>Hours</h2>
                <p>Monday to Friday: 09:00-20:00</p>
                <p>Saturday: 9:00-17:00</p>
                <p>Sunday: Closed</p>
              </div> 
            </div>
          </div>
        </div>
        {/* section4 ends */}

        {/* section 5 starts */}
         <div className='section5'>
          <div className='contact_sec5_containter'>
              <h2 className='our_location'>Our Location</h2>
              <p>if you'd like to visit us in person, here's our physical location</p>
              <p className='our_location_address'>
                No. 1 Peter Mweshihange Street, Kleine Kuppe, Windhoek,Namibia
              </p>
          </div>
         </div>
        {/* section 5 ends */}
        
        {/* section 6 starts */}
        <div className='section6'>
          <div className='map'>
          <iframe
              title="Windhoek Map"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0, borderRadius: '60px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10263.679031940928!2d17.078742679622737!3d-22.55972269427075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebebfc76f083db9%3A0xf7864b37716107b2!2sWindhoek%2C%20Namibia!5e0!3m2!1sen!2sus!4v1679779877725!5m2!1sen!2sus"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        {/* section 6 ends */}
        
        {/* section 7 start */}
        <div className='section7'>
          <div className='section7_container'>
          <div className='sec7_header'>
              <h2>We'd Love to Hear from You</h2>
              <p>Stay updated with the latest news, product launches, and promotions by followingus on our social media channels</p>
              <div className='sec7_socials'>
              <div className='social_icon1'>
                <div className='social_icon_instagram'>
                  <div  className='instagram_icon_container'>
                  <a href="#home" className='instagram'>
                    <FontAwesomeIcon icon={faInstagramSquare} style={{ color: '#E1306C', fontSize: '30px' }} />
                  </a>
                  </div>
                   <div className='instagram_span'>
                   <span>Moonsnacks_pty_ltd</span>
                   </div>
                  </div>
                <div className='social_icon_facebook'>
                  <div className='facebook_icon_container'>
                  <a href="#about" className='facebook'>
                    <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877f2', fontSize: '30px' }} />
                   
                  </a>
                  </div>
       
                  <div className='facebook_span'>
                  <span>Moonsnacksna</span>
                  </div>
                </div>
              </div>
                <div className='social_icon2'>
                 <div className='social_icon_linked'>
                  <div className='linked_icon_container'>
                  <a href="#clients" className='linked'>
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077B5', fontSize: '30px' }} />
                   
                  </a>
                  </div>
                  <div className='linked_span'>
                  <span>Moonsnacks Pty Ltd</span>
                  </div>
                  </div>
                  <div className='social_icon_twitter'>
                    <div className='twitter_icon_container'>
                      <a href="#contact" className='twitter'>
                      <FontAwesomeIcon icon={faSquareXTwitter} style={{color: '#000000', fontSize: '30px' }} />
                      
                    </a>
                    </div>
                    <div className='twitter_span'>
                    <span>Moonsnacksna</span>
                  </div>

                </div>
                </div>
                </div>

          </div>
          </div>
        </div>
        {/* section 7 ends */}
        {/* section 8 starts */}
        <div className='section8'>
        <div className='section_card_div'>
                <h2 className='w3-center'>Career Opportunities</h2>
                <p>Interested in joining our dynamic team? Explore Career Opportunities at MoonSnackson our Linked page(Embeded link).</p>
                <h7 className='card_div2_h7'>Bruno.ngh@moonsnacksna.com</h7>
              </div>
        </div>
        {/* section 8 ends */}
    </>
  )
}

export default Contact