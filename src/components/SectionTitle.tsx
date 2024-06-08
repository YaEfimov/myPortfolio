import styled from "styled-components";

export const StyledSectionTitle = styled.h2`
    
    font-family: 'Jost', sans-serif;
    font-size: 120px;
    letter-spacing: -0.04em;
    text-align: center;
    margin-bottom: 90px; 

    position: relative;

    &::before{
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: red; /* цвета из темы */

        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
    }

`