import styled from "styled-components";
import { font } from "../styles/common";
import { theme } from "../styles/theme";
export const SectionTitle = styled.h2`
  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 600,
    FMax: 36,
    FMin: 30,
  })}
  letter-spacing: 5px;
  text-align: center;
  position: relative;
  margin-bottom: 90px;
  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;

    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }
`;
