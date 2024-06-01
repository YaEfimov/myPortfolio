import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {

    return(
    <StyledSlider>
        <FlexWrapper>
            <Slide>
                <Text>“Success is not final; failure is not fatal: it is the courage to continue that counts.”</Text>
                <Name>Winston Churchill</Name>
            </Slide>
        </FlexWrapper>
        <Pagination>
            <span></span>
            <span></span>
            <span></span>
        </Pagination>
    </StyledSlider>);
} 

const StyledSlider = styled.div`
    max-width: 500px;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`

    text-align: center;
`

const Text = styled.p`

`
const Name = styled.span`

`

const Pagination = styled.span`
    span{
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 5px;
        background-color: deeppink;
    }
`