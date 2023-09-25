import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";
export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => (
          <ListItem key={index}>
            <Link href="vk.com">
              {item}
              <Mask>
                <span>{item}</span>
              </Mask>
              <Mask>
                <span>{item}</span>
              </Mask>
            </Link>
          </ListItem>
        ))}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  /* outline: 1px solid red; */
  color: ${theme.colors.accent};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 2.939px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: translateY(-50%);
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
    ${Mask} {
      transform: skew(12deg) translate(5px);
      color: ${theme.colors.font};
      & + ${Mask} {
        transform: skew(12deg) translate(-5px);
      }
    }
  }
`;

const Link = styled.a`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
`;
