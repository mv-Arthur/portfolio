import React from "react";
import photo from "../../../assets/images/photo.jpg";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-around">
          <div>
            <span>Hi There</span>
            <Name>I am Malakhov Arthur</Name>
            <MainTitle>A Web Developer. </MainTitle>
          </div>

          <Photo src={photo} alt="" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
`;

const MainTitle = styled.h1``;

const Name = styled.h2``;
