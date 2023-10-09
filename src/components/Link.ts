import styled, { css } from "styled-components";
import { theme } from "../styles/theme";
export const Link = styled.a<{active?:boolean}>`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px 0;
  position: relative;
  z-index: 0;
  
  &:hover {
    
    &::before {
      height: 10px;
    }
  }

  &::before {
    transition: ${theme.animation.transition};
    content: "";
    height: 0px;
    z-index: -1;
    display: inline-block;
    position: absolute;
    bottom: 6px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.accent};
    ${(props)=> props.active && css<{active?:boolean}>`
      height: 10px;
    `}
  }


`;
