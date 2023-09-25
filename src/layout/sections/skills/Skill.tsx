import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/theme";

type SkillPropsType = {
  skillTitle: string;
  skillText: string;
  skillIconId: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" justify="space-between" align="center">
        <IconWrapper>
          <Icon iconId={props.skillIconId} />
        </IconWrapper>
        <SkillTitle>{props.skillTitle}</SkillTitle>
        <SkillText>{props.skillText}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 380px;
  padding: 30px 20px 40px 20px;
`;
const IconWrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translateX(-50%) translateY(-50%);
    background-color: ${theme.colors.iconBg};
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
  }
`;
const SkillTitle = styled.h3`
  margin: 70px 0 15px 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const SkillText = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;
