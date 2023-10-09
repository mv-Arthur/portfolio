import React from "react";
import { Menu } from "./Menu";
import { S } from "../headerMenu_Styles";
export const MobileMenu: React.FC<{
  menuItems: Array<{ title: string; anchor: string }>;
}> = (props: { menuItems: Array<{ title: string; anchor: string }> }) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  const onMenuButtonClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <S.StyledMoblieMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onMenuButtonClick}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup
        isOpen={menuIsOpen}
        onClick={() => setMenuIsOpen(false)}
      >
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </S.StyledMoblieMenu>
  );
};
