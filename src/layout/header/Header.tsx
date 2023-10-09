import React from "react";

import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DesktopMenu } from "./headerMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/MobileMenu";
import { S } from "./headerMenu_Styles";
import { Link } from "react-scroll";

const menuItems = [
  { title: "Home", anchor: "home" },
  { title: "Skills", anchor: "skills" },
  { title: "Works", anchor: "works" },
  { title: "Testimony", anchor: "testimony" },
  { title: "Contact", anchor: "contact" },
];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <S.StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Link to={"home"} smooth={true}>
            <Logo />
          </Link>
          {width < breakpoint ? (
            <MobileMenu menuItems={menuItems} />
          ) : (
            <DesktopMenu menuItems={menuItems} />
          )}
        </FlexWrapper>
      </Container>
    </S.StyledHeader>
  );
};
