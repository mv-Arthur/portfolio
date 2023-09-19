import React from "react";
import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";

type SkillPropsType = {
  skillTitle: string;
  skillText: string;
  skillIconId: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.skillIconId} />
      <SkillTitle>{props.skillTitle}</SkillTitle>
      <SkillText>{props.skillText}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 30%;
`;

const SkillTitle = styled.h3``;

const SkillText = styled.span``;
