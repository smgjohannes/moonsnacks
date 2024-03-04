// import React from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
// import EventCard from './EventCard';
// import { Arrow } from 'react-horizontal-scrolling-menu'; // Corrected import statement
// import img6 from '../../Images/img8.png';
// import img7 from '../../Images/img7.png';

// function HomeEvents() {
//   function LeftArrow() {
//     const { isFirstItemVisible, scrollPrev } =
//       React.useContext(VisibilityContext);

//     return (
//       <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//         Left
//       </Arrow>
//     );
//   }

//   function RightArrow() {
//     const { isLastItemVisible, scrollNext } =
//       React.useContext(VisibilityContext);

//     return (
//       <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
//         Right
//       </Arrow>
//     );
//   }

//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       <EventCard
//         imagePath={img6}
//         title={'KasiVibe Festival (Event poster)'}
//         location={'Location: Sam Nujoma Stadium'}
//         details={
//           "we'll be at the KasiVibe Festifal, bringing the crunchies Peanut Burgers- Original flavour to you. Don't miss out"
//         }
//       />
//       <EventCard
//         imagePath={img7}
//         title={'Spring Market'}
//         location={'Location: Country Club'}
//         details={
//           'Come and find us at the Weekend Market. Sample our delicious snacks and take home your favorites'
//         }
//       />
//     </ScrollMenu>
//   );
// }

// export default HomeEvents;
