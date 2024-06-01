import styled from "styled-components";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Testimony = () => {
    return(
        <StyledTestimone>
            <StyledSectionTitle>quote of the day</StyledSectionTitle>
            <FlexWrapper direction="column" align="center">
                <Icon iconId="youtube"/>
                <Slider/>
            </FlexWrapper>
            
        </StyledTestimone>
    );
}

const StyledTestimone = styled.section`
    min-height: 30vh;
    background-color: #8400ff;
`