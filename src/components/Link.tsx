import styled from "styled-components";
import { theme } from "../styles/theme";
export const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;
  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: "";
    z-index: -1;
    display: inline-block;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.accent};
  }
`;
