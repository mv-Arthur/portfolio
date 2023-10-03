import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { Work } from "./Work";
import socialNetwork from "../../../assets/images/social_network.png";
import timer from "../../../assets/images/timer.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
const workItems = ["All", "landing page", "React", "spa"];

export const Works: React.FC = () => {
  /*eslint-disable*/
  const [works, setWorks] = React.useState([
    {
      image: socialNetwork,
      header: "Social Network",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      image: timer,
      header: "Timer",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    },
  ]);

  return (
    <StyledWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={workItems} />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          {works.map((el) => {
            return <Work image={el.image} header={el.header} text={el.text} />;
          })}
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`;
