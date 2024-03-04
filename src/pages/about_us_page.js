import React from 'react';

import { aboutUs } from '../data';
import PageMetaData from '../Components/PageMetaData';
import PageHeading from '../Components/Heading';
import AboutUsView from '../Components/About';

function AboutUsPage() {
  return (
    <>
      {<PageMetaData title={aboutUs.pageTitle} />}
      {
        <PageHeading
          title={aboutUs.pageTitle}
          subTitle={aboutUs.pageSubTitle}
          img={aboutUs.pageImage}
          primary={true}
        />
      }

      {<AboutUsView about={aboutUs} />}
    </>
  );
}

export default AboutUsPage;
