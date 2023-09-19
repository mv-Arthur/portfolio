import React from "react";
import styled from "styled-components";

type WorkPropsType = {
  image: string;
  header: string;
  text: string;
  firstLink?: string;
  secondLink?: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.image} alt="" />
      <Header>{props.header}</Header>
      <Text>{props.text}</Text>
      <Link href="#">{props.firstLink || "demo"}</Link>
      <Link href="#">{props.secondLink || "Code"}</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  background-color: #ffe869;
  max-width: 540px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const Header = styled.h3``;

const Text = styled.p``;

const Link = styled.a``;
