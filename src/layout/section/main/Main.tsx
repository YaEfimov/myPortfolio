import styled from "styled-components";
import photo from "../../../assets/images/person.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>HI! EVERYONE</SmallText>
            <StyledName>Efimov <span>Yaroslav</span></StyledName>
            <StyledMainTitle>A frontend developer</StyledMainTitle>
            <StyledDescription>
              Make designs mainly logos, visual identities, apps & websites,
              social media and magazines.
            </StyledDescription>
          </div>
          <PhotoWrapper>
            <StyledPhoto src={photo} alt=""/>
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #6e55df;
  display: flex;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  &::before{
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid white; // цвета из темы

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`

const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const StyledMainTitle = styled.h1`
  font-family: Manrope, sans-serif;
  font-weight: 400;
  font-size: 27px;
`;

const StyledName = styled.h2`
font-family: Manrope, sans-serif;
font-size: 108px;
font-weight: 800;
letter-spacing: -0.04em;
margin: 10px 0;

span {

  position: relative;
  z-index: 0;

  &::before{
    content: "";
    display: inline-block;
    width: 100%;
    height: 20px;
    background-color: red; // из темы

    position: absolute;
    bottom: 0;
    z-index : -1;
  }
}

`;

const SmallText = styled.h2`
  font-family: Inconsolata, sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.24em;
`;

const StyledDescription = styled.span`
font-family: Manrope, sans-serif;
font-size: 24px;
font-weight: 400;
letter-spacing: 0.02em;
`
