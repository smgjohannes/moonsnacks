import { Container } from 'react-bootstrap';
import styled from 'styled-components';
export const ContentContainer = styled(Container)``;
export const FlexContainer = styled.div`
  position: relative;
  flex-wrap: wrap;
  display: flex;
`;
export const ContentWrapper = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const CardBodyContainer = styled.div`
  position: relative;
  border-radius: 20px;
  background-color: #${(props) => props.bgColor || 'cec3d2'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-height: 400px;
  width: 100%;
  border: 1px;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 56.26em) {
    height: 300px;
  }
`;
// export const CarouselCardContainer = styled.div`
//   position: relative;
//   border-radius: 20px;
//   background-color: #${(props) => props.bgColor || 'cec3d2'};
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   max-height: 400px;

//   width: 100%;
//   border: 1px;
//   transition: transform 0.5s ease-in-out;

//   &:hover {
//     transform: scale(1.02);
//   }
// `;
export const CardImageContainer = styled.div`
  margin: 20px;
  position: relative;
  border-radius: 20px 20px 0 0;
  @media (max-width: 56.26em) {
    margin: 20px;

    & img {
      height: 180px !important;
      margin-top: 20px !important;
      width: 100%;
      object-fit: cover;
      border-radius: 20px !important;
    }
  }
`;

export const CardDescription = styled.div`
  margin: 20px 25px 30px 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  & h2 {
    font-weight: 400;
    font-size: 25px;
    color: black;
    font-family: 'Roboto', sans-serif;
  }
  @media (max-width: 56.26em) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`;

export const CardButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #292f36;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 10px;
  text-align: center;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
`;

export const ImageOverlayContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 10px 0;
  margin: 10px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  @media (max-width: 56.26em) {
    bottom: 10px;
    left:10px;

`;

export const OverlayText = styled.p`
  color: #4d5053;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Jost', sans-serif;
  text-align: center;
  padding: 10px;
`;
export const TestimonialsWrapper = styled.div`
  margin-top: 100px;

  & p {
    text-align: justify;
    color: #ffff;
    font-family: var(--font-family1);
    font-size: 18px;
  }
  & p span {
    font-size: 20px;
    margin-right: 10px;
    color: #ffff;
  }

  @media (max-width: 56.26em) {
    // overflow: hidden;
    // display: -webkit-box;
    // -webkit-line-clamp: 5;
    // -webkit-box-orient: vertical;
    // text-overflow: ellipsis;
    margin: 0;
    padding: 10px;
  }
`;
