import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../Images/1.png'
import './News.css'


function News() {
  return (
    <>
    {/* section1 starts */}
    <div className='news_sec1'>
    <div className='news_img_container'>
    <img src={img1} alt='background_image' style={{ width: '100%', height: '50vh', objectFit: 'cover',top:'100px' }} />
  </div>
     </div>
        {/* section1 ends */}

    {/* section2 starts */}
      <div className='news_sec2'>
        <div className='news_inner_div'>
          <div className='news_card'>
            <h4 className='w3-center news_sec2_h4'>News & Updates</h4>
          </div>

        </div>
      </div>
    {/* section2 ends */}
    {/* section3 starts */}
    <div className='news_col_container'>
            <div className='news_wraper'>
              
            <div className='news_col_div'>
              <div className='news_col_div_info_container'>
                <h3>Latest Update</h3>
            </div>
            <div className='w3-card-4 ' id='news_card_container'>
              <div className='news_sec3_inner_container'>
                <div className='news_inner_div1'>
                  <div className='news_inner_div1_infor'>
                  <img src={img1} alt='background_image' style={{ width: '100%', height: '300px'}} />
                  </div>
                
                </div>
                <div className='news_inner_div2'>
                  <div className='news_inner_div2_infor'>
                  <h2>Naban Invests Heavily in Moonsnacks: Boosting Growth and Innovation</h2>
                  <br></br>
                  <h8>The Namibia Business Angel Network (Naban), an esteemed non-profit organization dedicated to fostering start-up growth, has made a substantial investment ranging <br></br> from N$100,000 to N$200,000 in Moonsnacks, an enterprising Namibian youth-owned snack food company.</h8>
                  </div>
                   
              <div className='section4 w3-right w3-bottom-right'>
                <button className='explore_button'>
                    <h5>Explore More </h5><FontAwesomeIcon icon={faArrowRight} className='arrow_icon' />
                </button>
              </div>
                </div>
              </div>
            </div>
            </div>
          </div>
    </div>
    {/* section3 ends */}
    </>
  )
}

export default News