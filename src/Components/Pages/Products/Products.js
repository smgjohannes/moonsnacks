import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../Images/4s.webp';
import img2 from '../../Images/nuts1.png'
import img3 from '../../Images/flour.png'
import img4 from '../../Images/protein.png'
import img5 from '../../Images/trans-fat.png'
import img6 from '../../Images/vegetables.png'
import img7 from '../../Images/fiber.png'
import img8 from '../../Images/carb.png'
import img9 from '../../Images/energy.png'
import img10 from '../../Images/dairy-products.png'

import './Products.css';

function Products() {
  return (
    <>
         {/* section1 starts */}
      <div className='product_sec1'>
        <img src={img1} alt='background_image' style={{ width: '100%', height: '50vh', objectFit: 'cover' }} />
        
        <h2 className='product_sec1_caption'>
          Tasty Treats
        </h2>
      </div>
         {/* section1 ends */}

        {/* section 2 starts */}
        <div className='product_sec2'>
          <div className='w3-center product_sec2_header'>
            <h2>What we Sell</h2>
            <h4 className='w3-centter'>Original Flavors are meticulously crafted to deliver a satisfying crunch and a burst of irresistible flavor.</h4>
          </div>
          <div className='sec2_container_outer'>
          <div className='product_sec2_container'>
             <div className='w3-mobile sec2_div1'>
             <div className='sec2_img_container'>
             <img src={img1} alt='background_image' style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            </div>
            </div>
             <div className='sec2_div2'>
             <div className='sec2_infor_container'>
             <p className='sec2_p1'> Product Information</p>
                   <li className='sec2_li1'>
                      This recipe for caramel nuts produces crispy nuts that are coated in a sweet, crunchy layer of caramelized sugar. They're savory but sweet.
                   </li>
            </div>
            </div>
            
          </div>
          {/* another colunm */}
          <div className='product_sec2_container2'>
             <div className='w3-mobile sec2_div3'>
             <div className='sec2_infor_container1'>
             <p className='sec2_p2'> Product benefits</p>
             <ul className='sec2_li2'>
                   <li>
                     Nuts ans seeds are good sources of protein healthy fats fibres, vitamins and minerala.
                   </li>
                   <li>
                      Nuts and seeds regulate body weight as their fats are not fully absorbed and they regulate food intake.
                    </li>
                    <li>Nuts and seeds contain unsaturated fats and other nutrients that provide protective effects against heart disease and diabetes.
                    </li>

            </ul>
            </div>

            </div>
             <div className='sec2_div4'>
             <div className='sec2_img_container1'>
             <img src={img1} alt='background_image' style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            </div>
            </div>
            
          </div>
          </div>
        </div>
        {/* section2 ends */}
         {/* section3 starts */}
         <diva className='product_sec3'>
          <div className='product_sec3_main_container'>
            <div className='product_sec3_col1'>
              <div className='product_sec3_col1_insider 'style={{ textAlign: 'right' }}>
                <img src={img3} alt='d' style={{height:'40px',width:'40px'}}/>
                <h2 className='w3-right product_sec3_col1_insider_h2'>Ingredients:</h2>
                Peanuts,Wheat Flour,Eggs,Sugar,Salt,Powder Milk, Vanilla Flavour.
              </div>
            </div>
            <div className='product_sec3_col2'>
              <div className=' product_sec3_col2_main_container'>
              <div className='product_sec3_col2_img'>
                <img src={img2} alt='c' style={{height:'auto', width:'300px'}}/>
              </div>
            </div>
            </div>
            <div className='product_sec3_col3'>
            <div className='product_sec3_col3_insider'style={{ textAlign: 'left' }}>
                <img src={img10} alt='d' style={{height:'40px',width:'40px'}}/>
                <h2 className='product_sec3_col1_insider_h2'>Dairy:</h2>
                  <p>Calcium 72mg</p>
              </div>
            </div>
            <div className='product_sec3_col4'>
            <div className='product_sec3_col4_insider' style={{ textAlign: 'left' }}>
                <img src={img6} alt='d' style={{height:'40px',width:'40px'}}/>
                <h2 className='product_sec3_col1_insider_h2'>Fruits:</h2>
               <p> Patassium  116mg
                Magnesium 30mg
               </p>
              </div>
            </div>
            <div className='product_sec3_col5'>
            <div className='product_sec3_col5_insider'style={{ textAlign: 'right' }}>
                <img src={img9} alt='d' style={{height:'40px',width:'40px'}}/>
                <h2 className='product_sec3_col1_insider_h2'>Others:</h2>
                <p>Enerdy 773kj
                  Vitamin D 0.06mg
                </p>
              </div>
            </div>
            <div className='product_sec3_col6'>
            <div className='product_sec3_col6_insider' style={{ textAlign: 'right' }}>
                <img src={img4} alt='d' style={{height:'40px',width:'40px'}}/>
                <h2 className='product_sec3_col1_insider_h2'>Protein:</h2>
               <p> Protein 17g</p>
              </div>
            </div>
            <div className='product_sec3_col7'>
            <div className='product_sec3_col7_insider' style={{ textAlign: 'right' }}>
                <img src={img5} alt='d' style={{height:'40px',width:'40px'}}/>
                <h2 className='product_sec3_col1_insider_h2'>Protein:</h2>
               <p> Total Fat 15g,
                   Saturated Fat 2.9g,
                   MonounsSaturated fat 3.4g,
                   Polyunsaturated Fat 2.2g
               </p>
              </div>
            </div>
            <div className='product_sec3_col8'>
            <div className='product_sec3_col8_insider' style={{ textAlign: 'left' }}>
                <img src={img8} alt='d' style={{height:'40px',width:'40px'}}/>
                <h2 className='product_sec3_col1_insider_h2'>Carbohydrates:</h2>
               <p> Carbohydrates 16g
               </p>
              </div>
            </div>
            <div className='product_sec3_col9'>
            <div className='product_sec3_col9_insider' style={{ textAlign: 'left' }}>
                <img src={img7} alt='d' style={{height:'40px',width:'40px'}}/>
                <h2 className='product_sec3_col1_insider_h2'>Fiber:</h2>
                <p>Dietary Fiber 1g</p>
              </div>
            </div>
          </div>
         </diva>
          {/* section3 ends */}

          {/* Section 4 starts */}
          <div className='section4'>
            <button className='explore_button'>
                <h2>Explore More </h2><FontAwesomeIcon icon={faArrowRight} className='arrow_icon' />
            </button>
          </div>
          {/* Section 4 ends */}


    </>
  );
}

export default Products;
