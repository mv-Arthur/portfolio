import React from "react";
import styled from "styled-components";
import { Link } from "../../../components/Link";
import { theme } from "../../../styles/theme";
import { Button } from "../../../components/Button";
type WorkPropsType = {
  image: string;
  header: string;
  text: string;
  firstLink?: string;
  secondLink?: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.image} alt="" />
        <Button>view project</Button>
      </ImageWrapper>
      <Description>
        <Header>{props.header}</Header>
        <Text>{props.text}</Text>
        <Link href="#">{props.firstLink || "demo"}</Link>
        <Link href="#">{props.secondLink || "Code"}</Link>
      </Description>
    </StyledWork>
  );
};

const ImageWrapper = styled.div`
  margin-bottom: 25px;
  position: relative;
  &:hover {
    ${Button} {
      opacity: 1;
    }
    &::before {
      opacity: 1;
    }
  }

  &::before {
    transition: ${theme.animation.transition};
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
  }

  ${Button} {
    transition: ${theme.animation.transition};
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &::before {
      width: 100%;
      height: 100%;
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }
    ${Button} {
      opacity: 1;
    }
  }
`;

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};

  /* @media ${theme.media.desktop} {
    max-width: 540px;
  } */
`;
const Description = styled.div`
  padding: 0 20px 34px 20px;
  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Header = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;
