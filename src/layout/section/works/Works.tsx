import styled from "styled-components";
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/work";
import socialImg from './../../../assets/images/portfolio_1.webp'
import timerImg from './../../../assets/images/portfolio_2.webp'

const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA"]

export const Works = () => {
    return(
    <StyledWorks>
        <StyledSectionTitle>My Works</StyledSectionTitle>
         <Menu menuItems= {worksItems}/>
         <FlexWrapper justify="space-around">
            <Work title = {"Social Network"} text = "test text" src = {socialImg}/>
            <Work title = {"Timer"} text = "test text" src = {timerImg} />
         </FlexWrapper>
    </StyledWorks>);
}

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color:  #3375af;
`