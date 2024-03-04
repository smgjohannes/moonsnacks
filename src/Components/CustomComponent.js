import { ContentContainer, ContentWrapper, FlexContainer } from './Styles';

const CustomComponent = ({ children }) => {
  return (
    <>
      <div className='blog_section'>
        <div className='blog_section__content'>
          <ContentContainer>
            <ContentWrapper>
              <FlexContainer>{children}</FlexContainer>
            </ContentWrapper>
          </ContentContainer>
        </div>
      </div>
    </>
  );
};

export default CustomComponent;
