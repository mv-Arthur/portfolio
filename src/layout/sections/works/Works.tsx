import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { Work } from "./Work";
import socialNetwork from "../../../assets/images/social_network.png";
import timer from "../../../assets/images/timer.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { motion, AnimatePresence } from "framer-motion";

export type TabsItemsStatusType = "all" | "landing" | "react" | "spa";

const tabsItems: Array<{
  title: string;
  status: TabsItemsStatusType;
}> = [
  { title: "All", status: "all" },
  { title: "landing page", status: "landing" },
  { title: "React", status: "react" },
  { title: "spa", status: "spa" },
];

const worksData = [
  {
    image: socialNetwork,
    header: "Social Network",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type: "spa",
    id: 1,
  },
  {
    image: timer,
    header: "Timer",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    type: "react",
    id: 2,
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = React.useState("all");
  let filteredWorks = worksData;

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((wD) => wD.type === "landing");
  }

  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((wD) => wD.type === "react");
  }

  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((wD) => wD.type === "spa");
  }

  function changeFilterStatus(value: "all" | "landing" | "react" | "spa") {
    setCurrentFilterStatus(value);
  }

  return (
    <StyledWorks id="works">
      <Container>
        <SectionTitle>My Works</SectionTitle>

        <TabMenu
          changeFilterStatus={changeFilterStatus}
          tabsItems={tabsItems}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
          <AnimatePresence>
            {filteredWorks.map((el) => {
              return (
                <motion.div
                  style={{ width: "400px", flexGrow: 1, maxWidth: "540px" }}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={el.id}
                >
                  <Work
                    image={el.image}
                    header={el.header}
                    text={el.text}
                    key={el.id}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`
  position: relative;
  ${FlexWrapper} {
    gap: 30px;
  }
`;
