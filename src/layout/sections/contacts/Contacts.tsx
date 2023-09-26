import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";
export const Contact = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <StyledInput placeholder="name" />
          <StyledInput placeholder="subject" />
          <StyledInput placeholder="message" as={"textarea"} />
          <Button type="submit">Send message</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor};
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;
  color: ${theme.colors.font};
  letter-spacing: 0.05em;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  &:focus-visible {
    outline: 1px solid ${theme.colors.borderColor};
  }
`;

const StyledForm = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  textarea {
    resize: none;
    height: 155px;
  }
`;
