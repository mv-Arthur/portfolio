import React from "react";
import { Menu } from "./Menu";
import { S } from "../headerMenu_Styles";
export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.StyledMoblieMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup isOpen={false}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </S.StyledMoblieMenu>
  );
};
