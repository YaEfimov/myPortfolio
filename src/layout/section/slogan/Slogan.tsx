import styled from "styled-components";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Slogan = () => {
    return(<StyledSlogan>
        <StyledSectionTitle>I Am Available For Freelance</StyledSectionTitle>
        <Button>Hire me</Button>
    </StyledSlogan>);
}

const StyledSlogan =styled.section`
    min-height: 30vh;
    background-color: #744a5a;
    
`