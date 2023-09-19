import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./Skill";
export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Skill
          skillTitle="html5"
          skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          skillIconId="code"
        />
        <Skill
          skillTitle="css3"
          skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          skillIconId="css"
        />
        <Skill
          skillTitle="React"
          skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          skillIconId="react"
        />
        <Skill
          skillTitle="typescript"
          skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          skillIconId="typescript"
        />
        <Skill
          skillTitle="styled components"
          skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          skillIconId="styled-components"
        />
        <Skill
          skillTitle="WEB DESIgN"
          skillText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
          skillIconId="web-design"
        />
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #ffe5e4;
  min-height: 100vh;
`;
