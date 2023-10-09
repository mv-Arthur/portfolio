import React from "react";
import styled from "styled-components";
import { Link } from "../../../../components/Link";
import { TabsItemsStatusType } from "../Works";

type TabMenuPropsType = {
  tabsItems: Array<{
    title: string;
    status: TabsItemsStatusType;
  }>;
  changeFilterStatus: (value: TabsItemsStatusType) => void;
  currentFilterStatus: string;
};

export const TabMenu: React.FC<TabMenuPropsType> = (
  props: TabMenuPropsType
) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((item, index) => (
          <ListItem key={index}>
            <Link
              active={props.currentFilterStatus === item.status}
              as={"button"}
              onClick={() => props.changeFilterStatus(item.status)}
            >
              {item.title}
            </Link>
          </ListItem>
        ))}
      </ul>
    </StyledTabMenu>
  );
};

const ListItem = styled.li``;

const StyledTabMenu = styled.nav`
  ul {
    margin: 0 auto 40px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;

    ${Link} {
      display: inline-block;
      padding: 10px;
      white-space: nowrap;
    }
  }
`;
