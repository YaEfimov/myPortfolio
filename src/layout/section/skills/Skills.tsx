import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <StyledSectionTitle>awards and recognition</StyledSectionTitle>
            <FlexWrapper wrap="wrap" justify="space-between">
                <Skill iconId={"linkedin"} title='Interior design' description="Breakthrough designer of the year 2020" />
                <Skill iconId={"twitter"} title='Interior design' description="Breakthrough designer of the year 2020" />
                <Skill iconId={"youtube"} title='Interior design' description="Breakthrough designer of the year 2020" />
                <Skill iconId={"linkedin"} title='Interior design' description="Breakthrough designer of the year 2020" />
                <Skill iconId={"twitter"} title='Interior design' description="Breakthrough designer of the year 2020" />
                <Skill iconId={"youtube"} title='Interior design' description="Breakthrough designer of the year 2020" />
            </FlexWrapper>
        </StyledSkills>);
}

const StyledSkills = styled.section`
    background-color: #ffe5e4;
    min-height: 100vh;
`
