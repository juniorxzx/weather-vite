import React from "react";
import { Container, HeaderStyled } from "./styles";
import Location from "./Location";

const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Location />
      </HeaderStyled>
    </Container>
  );
};

export default Header;
