import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/theme";
import { font } from "../../styles/common";
export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Arthur</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                width="21px"
                height="21px"
                viewBox="0 0 21 21"
                iconId="instagram"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                width="21px"
                height="21px"
                viewBox="0 0 21 21"
                iconId="telegram"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                width="21px"
                height="21px"
                viewBox="0 0 21 21"
                iconId="vk"
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                width="21px"
                height="21px"
                viewBox="0 0 21 21"
                iconId="linkedin"
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <CopyRight>© 2023 Malakhov Arthur, All Rights Reserved.</CopyRight>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
  position: relative;
`;

const Name = styled.h4`
  letter-spacing: 3px;

  ${font({
    family: "'Josefin Sans', sans-serif",
    weight: 700,
    FMax: 22,
    FMin: 16,
  })}
`;

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 37px 0;
`;
const SocialLink = styled.a`
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.accent};
  cursor: pointer;
  transition: ${theme.animation.transition};
  &:hover {
    color: ${theme.colors.primaryBg};
    background: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`;

const CopyRight = styled.small`
  opacity: 0.5;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;
const SocialItem = styled.li``;
