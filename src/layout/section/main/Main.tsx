import styled from "styled-components";
import photo from "../../../assets/images/person.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align={"center"} justify={"space-arround"}>
        <div>
          <span>hi! everyone</span>
          <StyledName>Efimov Yaroslav</StyledName>
          <StyledMainTitle>A frontend developer</StyledMainTitle>
          <span>
            Make designs mainly logos, visual identities, apps & websites,
            social media and magazines.
          </span>
        </div>
        <StyledPhoto src={photo} alt=""></StyledPhoto>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #6e55df;
`;

const StyledPhoto = styled.img`
  width: 1920px;
  height: 993px;
  object-fit: cover;
`;

const StyledMainTitle = styled.h1``;

const StyledName = styled.h2``;
