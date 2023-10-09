import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./Skill";
import { Fade } from "react-awesome-reveal";
import { Container } from "../../../components/Container";
export const Skills: React.FC = () => {
  /* eslint-disable */
  const [skills, setSkills] = React.useState([
    {
      skillTitle: "html5",
      skillText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
      skillIconId: "code",
    },
    {
      skillTitle: "css3",
      skillText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
      skillIconId: "css",
    },
    {
      skillTitle: "React",
      skillText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
      skillIconId: "react",
    },
    {
      skillTitle: "typescript",
      skillText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
      skillIconId: "typescript",
    },
    {
      skillTitle: "styled components",
      skillText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
      skillIconId: "styled-components",
    },
    {
      skillTitle: "WEB DESIgN",
      skillText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
      skillIconId: "web-design",
    },
  ]);

  return (
    <StyledSkills id="skills">
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-around"}>
          <Fade damping={0.1} cascade>
            {skills.map((el, index) => {
              return (
                <Skill
                  skillTitle={el.skillTitle}
                  skillText={el.skillText}
                  skillIconId={el.skillIconId}
                  key={index}
                />
              );
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  position: relative;
`;
