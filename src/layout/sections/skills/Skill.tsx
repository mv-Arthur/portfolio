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
  width: 330px;
  padding: 62px 20px 40px;
  flex-grow: 1;

  @media ${theme.media.mobile} {
    padding: 62px 0px 40px;
  }
`;
export const IconWrapper = styled.div`
  color: ${theme.colors.accent};
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
  text-transform: uppercase;
`;

const SkillText = styled.p`
  text-align: center;
`;
