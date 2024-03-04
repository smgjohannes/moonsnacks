import styled from 'styled-components';
import { FaUser, FaArrowCircleRight } from 'react-icons/fa';
export const CardContainer = styled.div`
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
export const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px 0px;
  border-radius: 20px;
`;
export const CardMedia = styled.div`
  position: relative;
  &::before {
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
`;
export const CardImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 20px;
`;
export const CardWraper = styled.div`
  margin-right: 8px;
  margin-left: 8px;
`;
export const DateContainer = styled.div`
  background-color: white;
  border-radius: 50px;
  top: 20px;
  position: absolute;
  width: 60px;
  height: 60px;
  radius: 50%;
  left: 10px;
  z-index: 5;
  & h2 {
    text-align: center;
    font-weight: 800;
    font-size: 20px;
    color: #274c5b;
    line-height: 20.5px;
    margin-top: 8px;
    font-family: 'Roboto', sans-serif;
  }
`;
export const CardBody = styled.div`
  z-index: 5;
  position: absolute;
  background-color: white;
  top: 120px;
  left: 0px;
  margin: 76px 30px;
  padding: 54px 57px 54px 57px;
  border-radius: 31px 34px 30px 30px;
  box-shadow: 0px 20px 35px 0px rgba(167, 167, 167, 0.25);
  & h4 {
    margin-top: 5px;
    font-weight: 400;
    font-size: 18px;
    color: #274c5b;
    line-height: 21.5px;
    font-family: 'Roboto', sans-serif;
  }
  @media (max-width: 900px) {
    margin: 20px 30px 0px 30px;
    padding: 34px 37px 34px 37px;
    top: 190px;
  }
`;
export const PrimaryTitle = styled.div`
  display: flex;
  column-gap: 20px;
  color: #7eb693;
`;
export const SubTitle = styled.h3`
  margin: 5px 0 0 0;
  font-weight: 800;
  font-size: 20px;
  color: #274c5b;
  line-height: 29.5px;
  font-family: 'Roboto', sans-serif;
`;
export const Description = styled.p`
font-size:16px;
font-weight400
color:#525C60;
padding:0;
margin:0;
`;
export const TextButton = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #274c5b;
  font-weight: 700;
  &:hover {
    opacity: 0.8;
  }
`;
export const UserIcon = styled(FaUser)`
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  color: #7eb693;
`;
export const ReadMoreArrowIcon = styled(FaArrowCircleRight)`
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  color: inherit;
`;
