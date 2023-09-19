import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
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
  background-color: #ffd8a5;
  min-height: 20vh;
`;

const Name = styled.h4``;

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
`;
const SocialLink = styled.a``;
const CopyRight = styled.small``;
const SocialItem = styled.li``;
