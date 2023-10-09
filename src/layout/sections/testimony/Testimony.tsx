import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { IconWrapper } from "../skills/Skill";
import { Container } from "../../../components/Container";

export const Testimony: React.FC = () => {
  return (
    <StyledTestimony id="testimony">
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction="column" align="center">
          <IconWrapper>
            <Icon iconId="quote" />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  position: relative;
  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`;
