import React from 'react'
import img1 from '../../Images/2.jpg'
import './About.css'

function About() {
  return (
    
    <>
    {/* section1 starts */}
    <div className='about_sec1'>
        <div className='about_img_container'>
        <img src={img1} alt='background_image' style={{ width: '100%', height: '50vh', objectFit: 'cover', top:'100px' }} />
      </div>
     </div>
     
    {/* section2 starts */}
    <div className='about_sec2'>
        <div className='about_inner_div'>
          <div className='about_card'>
            <h4 className='w3-center about_sec2_h4'>About us</h4>
            <h9 className='w3-center'>Moonsnacks</h9>
          </div>

        </div>
      </div>
    {/* section2 ends */}
    <div className='about_sec3'></div>
    </>
  )
}

export default About