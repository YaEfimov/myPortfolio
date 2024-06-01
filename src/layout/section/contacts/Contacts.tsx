import styled from "styled-components"
import { StyledSectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contact = () => {
    return(
        <StyledContacts>
            <StyledSectionTitle>Contact</StyledSectionTitle>
            <StyledForm>
                <Field placeholder="name"/>
                <Field placeholder="subject"/>
                <Field placeholder = "message" as={"textarea"}/>
                <Button type="submit">Send massage</Button>
            </StyledForm>
        </StyledContacts>
    );
}

const StyledContacts = styled.section`
    min-height: 30vh;
    background-color: #76cf76;
`


const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Field = styled.input`
`



