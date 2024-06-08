import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <StyledSectionTitle>PORTFOLIO</StyledSectionTitle>
                <FlexWrapper wrap="wrap" justify="space-between">
                    <Skill iconId={"linkedin"} title='Interior design' description="Breakthrough designer of the year 2020" />
                    <Skill iconId={"twitter"} title='Interior design' description="Breakthrough designer of the year 2020" />
                    <Skill iconId={"youtube"} title='Interior design' description="Breakthrough designer of the year 2020" />
                    <Skill iconId={"linkedin"} title='Interior design' description="Breakthrough designer of the year 2020" />
                    <Skill iconId={"twitter"} title='Interior design' description="Breakthrough designer of the year 2020" />
                    <Skill iconId={"youtube"} title='Interior design' description="Breakthrough designer of the year 2020" />
                </FlexWrapper>
            </Container>
        </StyledSkills>);
}

const StyledSkills = styled.section`
`
