import React from "react";

import { S } from "../headerMenu_Styles";
export const Menu: React.FC<{
  menuItems: Array<{ title: string; anchor: string }>;
}> = (props: { menuItems: Array<{ title: string; anchor: string }> }) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => (
        <S.ListItem key={index}>
          <S.NavLink
            to={item.anchor}
            smooth={true}
            activeClass="active"
            spy={true}
          >
            {item.title}
            <S.Mask>
              <span>{item.title}</span>
            </S.Mask>
            <S.Mask>
              <span>{item.title}</span>
            </S.Mask>
          </S.NavLink>
        </S.ListItem>
      ))}
    </ul>
  );
};
