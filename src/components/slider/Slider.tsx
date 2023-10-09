import React from "react";
import styled from "styled-components";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../../styles/slider.css";
const Slide = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: grab;
  }
`;

const Text = styled.p``;

const Name = styled.span`
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`;

const SlideFC: React.FC<{ text: string; name: string }> = (props: {
  text: string;
  name: string;
}) => {
  return (
    <Slide>
      <Text>{props.text}</Text>
      <Name>@{props.name}</Name>
    </Slide>
  );
};

const items = [
  <SlideFC
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum
  dolor sit amet, consectetur adipisicing elit.2"
    name="ivan ivanow"
  />,
  <SlideFC
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum
  dolor sit amet, consectetur adipisicing elit.2"
    name="sergey petrov"
  />,
  <SlideFC
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum
  dolor sit amet, consectetur adipisicing elit.2"
    name="alexander kopilov"
  />,
];

export const Slider: React.FC = () => (
  <StyledSlider>
    <AliceCarousel mouseTracking items={items} />
  </StyledSlider>
);

const StyledSlider = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
