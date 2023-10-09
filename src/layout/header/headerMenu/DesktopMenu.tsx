import React from "react";
import { Menu } from "./Menu";
import { S } from "../headerMenu_Styles";
export const DesktopMenu: React.FC<{
  menuItems: Array<{ title: string; anchor: string }>;
}> = (props: { menuItems: Array<{ title: string; anchor: string }> }) => {
  return (
    <S.StyledHeaderMenu>
      <Menu menuItems={props.menuItems} />
    </S.StyledHeaderMenu>
  );
};
