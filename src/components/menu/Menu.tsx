import React from "react";
import styled from "styled-components";
export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="https://www.deepl.com/">Home</a>
        </li>
        <li>
          <a href="https://www.deepl.com/">Skills</a>
        </li>
        <li>
          <a href="https://www.deepl.com/">Works</a>
        </li>
        <li>
          <a href="https://www.deepl.com/">Testimony</a>
        </li>
        <li>
          <a href="https://www.deepl.com/">Contact</a>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;
