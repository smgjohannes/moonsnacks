//About images
import aboutBackgroundImage from './assets/images/2.jpg';
import aboutStorySectionImage from './assets/images/5.jpg';
//blog images
import blogImage from './assets/images/blog.png';
import blogImage1 from './assets/images/blog1.png';
import blogImage2 from './assets/images/blog2.png';
import blogImage3 from './assets/images/blog3.png';
import blogImage4 from './assets/images/blog4.png';
import blogImage5 from './assets/images/blog5.png';
//testimonial Images
import testimonialImage1 from './assets/images/ourteam1.png';
import testimonialImage2 from './assets/images/ourteam2.jpg';
import testimonialImage3 from './assets/images/ourteam3.png';
export const blogs = [
  {
    id: 1,
    title: 'Title 0ne',
    date: '03 Nov',
    description:
      'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    user: 'Dyson',
    shortDiscription:
      'Peanut-Based Snacks: A Nutty Choice for Health and Flavor',
    img: blogImage,
    overlayText: 'Smoking snack',
    background: '#CEC3D2',
    content: [
      {
        title: 'yrs',
        shortDiscription: '',
        image: '',
        description: '',
      },
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
    ],
    comments: [{}],
  },
  {
    id: 2,
    title: 'Title two',
    date: '03 Nov',
    description:
      'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    user: 'Dyson',
    shortDiscription: 'The Taste : Discover our story on the Flavour choice',
    img: blogImage1,
    overlayText: 'Nutty Flavour',
    background: '#f4f0ec',
    content: [
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
    ],
    comments: [{}],
  },
  {
    id: 3,
    title: 'The Benefits of Vitamin D & How to Get It',
    date: '03 Nov',
    description:
      'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    user: 'Dyson',
    shortDiscription: 'Open-shop Event: The place to be for everyone',
    img: blogImage2,
    overlayText: 'Cool Event',
    background: 'f4f0ec',
    content: [
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
    ],
    comments: [{}],
  },
  {
    id: 4,
    title: 'The Benefits of Vitamin D & How to Get It',
    date: '03 Nov',
    description:
      'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    user: 'Dyson',
    shortDiscription: 'The Benefits of Vitamin D & How to Get It',
    img: blogImage3,
    content: [
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
    ],
    comments: [{}],
  },
  {
    id: 5,
    title: 'The Benefits of Vitamin D & How to Get It',
    date: '03 Nov',
    description:
      'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    user: 'Dyson',
    shortDiscription: 'The Benefits of Vitamin D & How to Get It',
    img: blogImage4,
    content: [
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
    ],
    comments: [{}],
  },
  {
    id: 6,
    title: 'The Benefits of Vitamin D & How to Get It',
    date: '03 Nov',
    description:
      'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    user: 'Dyson',
    shortDiscription: 'The Benefits of Vitamin D & How to Get It',
    img: blogImage5,
    content: [
      {
        title: '',
        shortDiscription: '',
        image: '',
        description: '',
      },
    ],
    comments: [{}],
  },
];
//Testimonials
export const testimonials = [
  {
    id: 1,
    user: 'Dyson',
    profesion: 'Scientist',
    comment:
      'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    img: testimonialImage1,
  },
  {
    id: 2,
    user: 'Shain',
    profesion: 'Softwer developer',
    comment:
      'Simply dummy text of the printing and typesetting industry. its realy good',
    img: testimonialImage2,
  },
  {
    id: 3,
    user: 'Dyson',
    profesion: 'Scientist',
    comment:
      'We have created some responsive W3CSS templates for you to use.You are free to modify, save, share, use or do whatever you want with them:hhhhhhhhhhhhhhhhhhhhhhhhhh',
    img: testimonialImage3,
  },
];
//About us
export const aboutUs = {
  pageTitle: 'About Us',
  pageSubTitle: 'Moonsnacks',
  pageImage: { aboutBackgroundImage },
  tagLine:
    'Our Peanut Burgers - Original Flavor are meticulously crafted to deliver a satisfying crunch and a burst of irresistible flavor',
  storySection: {
    sectionPrimaryTitle: 'Our Story',
    sectionSecondaryTitle: 'We provide healthy snacks for your family.',
    sectionDescription:
      "Moonsnacks Investment (Pty) Ltd is a proudly Namibian owned and operated food processing company that embarked on its journey in late 2021, officially launching its operations in mid-2022. The company's inception was driven by a vision to transform Namibia's value addition landscape. We recognized the immense potential within the Namibian agricultural industry but identified a critical gap in value addition. This gap was our inspiration to create snack products that not only delight consumers but also empower local farmers and open doors to formal and international markets.",
    sectionImage: { aboutStorySectionImage },
    metaData: {
      metaDataTitle: 'Business Enquires',
      metaDataSubTitle: '+246 8175 65534',
      metaDataContent: 'Bruno.ngh@moonsnacksna.com',
    },
  },
};
