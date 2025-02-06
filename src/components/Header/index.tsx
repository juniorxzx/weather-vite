import React from "react";
import { Container, HeaderStyled } from "./styles";
import Location from "./Location";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Location />

        <ToggleTheme />
      </HeaderStyled>
    </Container>
  );
};

export default Header;
