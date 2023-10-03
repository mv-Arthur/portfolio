import React from "react";
import { Menu } from "./Menu";
import { S } from "../headerMenu_Styles";
export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.StyledHeaderMenu>
      <Menu menuItems={props.menuItems} />
    </S.StyledHeaderMenu>
  );
};
