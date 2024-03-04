import React from 'react';

const PageHeading = ({ ...props }) => {
  return (
    <>
      {props.primary && (
        <div className='news_sec1'>
          <div className='overlay'></div>
          <div className='news_img_container'>
            <img
              src={props.img}
              alt='background_image'
              style={{
                width: '100%',
                height: '50vh',
                objectFit: 'cover',
                top: '100px',
              }}
            />
          </div>
          <div className='news_card'>
            <h4 className='w3-center news_sec2_h4'>{props.title}</h4>
            {props.subtitle && <h9 className='w3-center'>{props.subtitle}</h9>}
          </div>
        </div>
      )}

      {props.secondary && (
        <div className='primary'>
          <div>Page title</div>
        </div>
      )}
    </>
  );
};

export default PageHeading;
