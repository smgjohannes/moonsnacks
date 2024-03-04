import styled from 'styled-components';

export const BlogDetailFirstContainer = styled.div`
  position: relative;
  background: #fff;
  margin: 70px 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BlogDetailTitleMainHeader = styled.h2`
  color: #1e1247;
  font-size: 50px;
  font-weight: 500;
  text-align: center;
  font-family: 'Playfair Display', sans-serif;
`;

export const BlogDetailDescription = styled.p`
  font-weight: 400;
  font-size: 20px;
  font-family: 'DM Sans', sans-serif;
  text-align: justify;
`;
//Second container with cards
export const BlogDetailSecondContainer = styled.div`
  position: relative;
  background: #f3ecf5;
  margin: 70px 100px;
`;
export const BlogDetailCardsContainer = styled.div`
  position: relative;
  background: #fff;
  transition: box-shadow 0.3s ease-in-out;
  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
  flex: 1 ${(props) => props.flexBasis || 16}%;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 20px 15px 76px 15px;
  height: 400px;
  border-radius: 20px;
  &:after {
    position: absolute;
    content: '';
    height: 100%;
    left: 0;

    z-index: 1;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 60px 0px 40px 0px;
    flex: 1 100%;
  }
`;
export const BlogDetailCardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px 0px;
  border-radius: 20px;
`;
export const BlogDetailCardHeader = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: #274c5b;
  font-size: 18px;
  text-align: center;
`;
export const BlogDetailCardDesrciption = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: #525c60;
  font-size: 14px;
`;
