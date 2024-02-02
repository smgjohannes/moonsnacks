import React from 'react'
import img1 from '../../Images/1.png'
import './Blog.css'

function Blog() {
  return (
    <>
    {/* section1 starts */}
    <div className='blog_sec1'>
    <div className='blog_img_container'>
    <img src={img1} alt='background_image' style={{ width: '100%', height: '50vh', objectFit: 'cover',top:'100px' }} />
  </div>
     </div>
        {/* section1 ends */}

    {/* section2 starts */}
      <div className='blog_sec2'>
        <div className='blog_inner_div'>
          <div className='blog_card'>
            <h4 className='w3-center blog_sec2_h4'>Blog</h4>
          </div>

        </div>
      </div>
    {/* section2 ends */}
     {/* section3 starts */}
     <div className='blog_col_container'>
            <div className='blog_wraper'>
              
            <div className='blog_col_div'>
              <div className='blog_col_div_info_container'>
                <h3>Latest Update</h3>
                <div className='w3-card-4 ' id='div2_inside_card1'></div>
                </div>
            </div>
          </div>
    </div>
    {/* section3 ends */}
    </>
  )
}

export default Blog