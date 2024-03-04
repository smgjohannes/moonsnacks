import {
  CardContainer,
  CardContent,
  CardWraper,
  DateContainer,
  CardBody,
  PrimaryTitle,
  SubTitle,
  Description,
  TextButton,
  UserIcon,
  ReadMoreArrowIcon,
  CardMedia,
} from './CardStyles';
const Card = ({
  id,
  link,
  primaryTitle,
  subTitle,
  description,
  buttonText,
  img,
  date,
  ...props
}) => {
  return (
    <CardContainer id={id} flexBasis={props.flexBasis} imgUrl={img}>
      <CardWraper>
        <CardContent>
          <DateContainer>
            <h2>{date}</h2>
          </DateContainer>
          <CardBody>
            <PrimaryTitle>
              <UserIcon />
              {primaryTitle}
            </PrimaryTitle>
            <SubTitle>{subTitle}</SubTitle>
            <Description>{description}</Description>
            <TextButton href={link}>
              {buttonText} <ReadMoreArrowIcon />
            </TextButton>
          </CardBody>
          <CardMedia />
        </CardContent>
      </CardWraper>
    </CardContainer>
  );
};

export default Card;
