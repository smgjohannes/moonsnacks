import React from 'react';
import img1 from '../../Images/1.png';
import './Blog.css';
import { ContentContainer, ContentWrapper, FlexContainer } from '../../Styles';
import Card from '../../Card';
import { blogs } from '../../../data';
import slugify from 'slugify';

function Blog() {
  return (
    <>
      {/* section1 starts */}
      <div className='blog_sec1'>
        <div className='blog_img_container'>
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
        <div className='blog_card'>
          <h4 className='w3-center blog_sec2_h4'>Blog</h4>
        </div>
      </div>
      {/* section1 ends */}

      {/* section2 starts */}

      {/* section2 ends */}
      {/* section3 starts */}
      <div className='blog_section'>
        <div className='blog_section__content'>
          <ContentContainer>
            <ContentWrapper>
              <FlexContainer>
                {blogs.map((r) => (
                  <Card
                    key={r.id}
                    flexBasis={40}
                    link={`/blog/${r.id}/${slugify(r.title, {
                      replacement: '-',
                      remove: undefined,
                      lower: true,
                      strict: false,
                      trim: true,
                    })}`}
                    img={r.img}
                    primaryTitle={r.user}
                    subTitle={r.shortDiscription}
                    description={r.discription}
                    buttonText={'Read More'}
                    date={r.date}
                  />
                ))}
              </FlexContainer>
            </ContentWrapper>
          </ContentContainer>
        </div>
      </div>
      {/* section3 ends */}
    </>
  );
}

export default Blog;
