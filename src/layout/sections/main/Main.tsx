import React from "react";
import photo from "../../../assets/images/photo.jpg";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/theme";
import { font } from "../../../styles/common";

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-around" wrap="wrap">
          <div>
            <SmallText>Hi There</SmallText>
            <Name>
              I am <span>Malakhov Arthur</span>
            </Name>
            <MainTitle>A Web Developer. </MainTitle>
          </div>

          <PhotoWrapper>
            <Photo src={photo} alt="" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #fff5e7;
  display: flex;
`;

const MainTitle = styled.h1`
  ${font({
    weight: 400,
    FMax: 27,
    FMin: 20,
  })}
`;

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const Name = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    FMax: 50,
    FMin: 36,
  })}
  letter-spacing: 0.05em;
  margin: 10px 0;
  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;
    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      height: 20px;
      width: 100%;

      background-color: ${theme.colors.accent};
      bottom: 0;
      z-index: -1;
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 15px;
    margin-bottom: 21px;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 45px;
  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`;
