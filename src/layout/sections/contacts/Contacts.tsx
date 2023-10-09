import React, { ElementRef, useRef } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const form = useRef<ElementRef<"form">>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_bttnf8r",
        "template_hieahcj",
        form.current,
        "erp2_oWz8AiDWmSF_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <StyledContacts id="contact">
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm ref={form} onSubmit={sendEmail}>
          <StyledInput required placeholder="name" name="user_name" />
          <StyledInput required type="email" placeholder="email" name="email" />
          <StyledInput required placeholder="subject" name="subject" />
          <StyledInput
            required
            placeholder="message"
            as={"textarea"}
            name="message"
          />
          <Button type="submit">Send message</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  position: relative;
`;

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
