import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
    return(<StyledFooter>
        <FlexWrapper direction="column" align="center">
            <Name>Yaroslav</Name>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId="facebook"></Icon>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId="linkedin"></Icon>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId="twitter"></Icon>
                    </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                        <Icon height="21px" width="21px" viewBox="0 0 21px 21px" iconId="youtube"></Icon>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <Copyright>2024 Yaroslav Efimov</Copyright>
        </FlexWrapper>
    </StyledFooter>);
}

const StyledFooter = styled.footer`
    background-color: #ff8800;
    min-height: 20vh;

`
const Name = styled.span`


`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;

`

const SocialItem = styled.li`


`

const SocialLink = styled.a`

`

const Copyright = styled.small`

`