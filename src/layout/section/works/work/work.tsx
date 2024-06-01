import styled from "styled-components";

type WorkPropsType = {
    title: string;
    text: string;
    src: string;
}

export const Work = (props : WorkPropsType) => {
    return(<StyledWork>
        <StyledImage src={props.src} alt="" />
        <StyledTitle>{props.title}</StyledTitle>
        <StyledText>{props.text}</StyledText>
        <StyledLink href={"#"}>demo</StyledLink>
        <StyledLink href={"#"}>code</StyledLink>        
    </StyledWork>);
}

const StyledWork = styled.div`
    background-color: yellow;
    max-width: 540px;
    width: 100%;

`

const StyledImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const StyledLink = styled.a`
`

const StyledTitle = styled.h3`
`

const StyledText = styled.p`
`