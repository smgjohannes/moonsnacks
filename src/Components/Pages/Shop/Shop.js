import React from 'react';
import img1 from '../../Images/2.jpg';
import './Shop.css';

function Shop() {
  return (
    <>
      {/* section1 starts */}
      <div className='shop_sec1'>
        <div className='shop_img_container'>
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
        <div className='shop_card'>
          <h4 className='w3-center news_sec2_h4'>Shop</h4>
          <h9 className='w3-center'>Moonsnacks</h9>
        </div>
      </div>
      {/* section1 ends */}
      {/* section3 starts */}
      <div className='shop_col_container'>
        <div className='shop_wraper'>
          <div className='shop_col_div'>
            <div className='shop_col_div_info_container'>
              <h3>Products</h3>
              <div className='w3-card-4 ' id='div2_inside_card1'></div>
            </div>
          </div>
        </div>
      </div>
      {/* section3 ends */}
    </>
  );
}

export default Shop;
