import styled from "styled-components";
import {theme} from "../../styles/theme";
import { css } from "styled-components";
import { Link } from "react-scroll";
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  /* outline: 1px solid red; */
  color: ${theme.colors.accent};
  transition: ${theme.animation.transition};
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const NavLink = styled(Link)`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
  
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
    transition: ${theme.animation.transition};
  }

  &:hover, &.active {
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
  &:hover {
    cursor: pointer;
  }
  
`;

const ListItem = styled.li`
  position: relative;


`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 32, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-100%);
  transition: ${theme.animation.transition};
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
     
      transform: translateX(0%);
      
    `}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 99999999;
 
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;
  
    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(225, 225, 225, 0);
      `}

    &::before {
      content: "";
      display: block;
      height: 2px;
      width: 36px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
      transition: ${theme.animation.transition};
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg);
        `}
    }

    &::after {
      content: "";
      display: block;
      height: 2px;
      width: 26px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);
      transition: ${theme.animation.transition};
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg);
          width: 36px;
        `}
    }
  }
`;

const StyledMoblieMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`;


const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const StyledHeader = styled.header`
  background-color: rgba(31, 31, 31, 90%);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999999;
`;

export const S = {
  NavLink,
    Mask,
    ListItem,
    MobileMenuPopup,
    BurgerButton,
    StyledMoblieMenu,
    StyledHeaderMenu,
    StyledHeader
}